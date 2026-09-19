import type { Action } from 'svelte/action';

export type RevealFrom = 'up' | 'left' | 'right' | 'fade' | 'scale' | 'blur';

export interface RevealOptions {
	/** Delay before the element settles, in milliseconds. */
	delay?: number;
	/** Distance travelled on the Y axis, as any CSS length. */
	y?: string;
	/** Distance travelled on the X axis, as any CSS length. */
	x?: string;
	/** Motion direction. Defaults to rising from below. */
	from?: RevealFrom;
	/** Fraction of the element that must be visible before revealing. */
	threshold?: number;
}

const prefersReducedMotion = () =>
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fades an element into view as it scrolls in. Styling lives in
 * `lib/styles/animations.css` under the `[data-reveal]` attribute.
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options = {}) => {
	const {
		delay = 0,
		y = '2rem',
		x = '2rem',
		from = 'up',
		threshold = 0.12
	} = options ?? {};

	// Honour the OS accessibility setting — show content immediately, no offsets.
	if (prefersReducedMotion()) {
		node.dataset.reveal = 'shown';
		node.dataset.revealFrom = from;
		return {};
	}

	node.dataset.reveal = 'hidden';
	node.dataset.revealFrom = from;
	node.style.setProperty('--reveal-delay', `${delay}ms`);
	node.style.setProperty('--reveal-y', y);
	node.style.setProperty('--reveal-x', from === 'left' ? `-${x.replace(/^-/, '')}` : x);

	const observer = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			node.dataset.reveal = 'shown';
			observer.disconnect();
		},
		{ threshold, rootMargin: '0px 0px -6% 0px' }
	);

	observer.observe(node);

	return { destroy: () => observer.disconnect() };
};
