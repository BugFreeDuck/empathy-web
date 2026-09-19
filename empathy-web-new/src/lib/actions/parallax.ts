import type { Action } from 'svelte/action';

const subscribers = new Set<() => void>();
let frame = 0;
let listening = false;

/** One rAF-throttled scroll loop shared by every parallax element on the page. */
function tick() {
	frame = 0;
	for (const notify of subscribers) notify();
}

function onScroll() {
	frame ||= requestAnimationFrame(tick);
}

function ensureListeners() {
	if (listening) return;
	listening = true;
	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', onScroll, { passive: true });
}

function teardownListeners() {
	if (subscribers.size > 0) return;
	listening = false;
	window.removeEventListener('scroll', onScroll);
	window.removeEventListener('resize', onScroll);
}

function subscribe(notify: () => void) {
	ensureListeners();
	subscribers.add(notify);
	notify();

	return () => {
		subscribers.delete(notify);
		teardownListeners();
	};
}

function readScale(node: HTMLElement) {
	const raw = getComputedStyle(node).getPropertyValue('--parallax-scale').trim();
	const scale = Number.parseFloat(raw);
	return Number.isFinite(scale) && scale > 0 ? scale : 1.2;
}

export type ParallaxParams =
	| number
	| {
			speed?: number;
			/**
			 * Measure a shared ancestor (`[data-parallax-group]`) so siblings
			 * drift by the same offset.
			 */
			group?: boolean;
	  };

function resolveParams(params: ParallaxParams | undefined): { speed: number; group: boolean } {
	if (typeof params === 'number') return { speed: params, group: false };
	return { speed: params?.speed ?? 0.14, group: Boolean(params?.group) };
}

/**
 * Shifts an element against the scroll direction with a vertical translate.
 * Position is always read from an untransformed frame so the translate cannot
 * feed back into the next frame. Pass `{ group: true }` inside a
 * `[data-parallax-group]` to keep sibling photos in lockstep.
 */
export const parallax: Action<HTMLElement, ParallaxParams | undefined> = (node, params) => {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	let { speed: amount, group } = resolveParams(params);
	if (amount === 0) return {};

	// Local clipping frame (figure) — used for height / edge clamp only.
	const localFrame = node.parentElement ?? node;
	let scale = readScale(node);

	const measureEl = () => {
		if (!group) return localFrame;
		return (
			node.closest<HTMLElement>('[data-parallax-group]') ?? localFrame
		);
	};

	const unsubscribe = subscribe(() => {
		const root = measureEl();
		const { top, height: rootHeight } = root.getBoundingClientRect();
		const localHeight = localFrame.getBoundingClientRect().height;
		if (rootHeight === 0 || localHeight === 0) return;

		const offsetFromCentre = top + rootHeight / 2 - window.innerHeight / 2;
		const rawY = -offsetFromCentre * amount;
		// Clamp per tile so scaled edges stay covered; raw offset stays shared.
		const maxShift = ((scale - 1) / 2) * localHeight * 0.9;
		const y = Math.max(-maxShift, Math.min(maxShift, rawY));

		node.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(${scale})`;
	});

	return {
		update(next?: ParallaxParams) {
			({ speed: amount, group } = resolveParams(next));
			scale = readScale(node);
			onScroll();
		},
		destroy: unsubscribe
	};
};
