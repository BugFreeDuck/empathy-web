import type { Action } from 'svelte/action';
import { MARQUEE_PX_PER_SEC } from '$lib/utils/marquee';

export type MarqueeOptions = {
	/** Auto-scroll speed in px/s (leftward). */
	speed?: number;
};

const prefersReducedMotion = () =>
	typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fineHover = () =>
	typeof window !== 'undefined' &&
	window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const DRAG_THRESHOLD = 6;

/**
 * Infinite horizontal marquee with click-drag and touch-flick.
 * Expects a duplicated track (two identical halves) so wrapping at 50% is seamless.
 */
export const marquee: Action<HTMLElement, MarqueeOptions | undefined> = (node, options) => {
	let speed = options?.speed ?? MARQUEE_PX_PER_SEC;
	let x = 0;
	let setWidth = 0;
	let raf = 0;
	let lastTs = 0;
	/** True from pointerdown until the gesture ends — freezes auto-scroll and momentum. */
	let held = false;
	let dragging = false;
	let pending = false;
	let pointerId: number | null = null;
	let dragOrigin = 0;
	let dragStartX = 0;
	let dragStartY = 0;
	let velocity = 0;
	let lastMoveX = 0;
	let lastMoveT = 0;
	let hovered = false;
	let reduced = prefersReducedMotion();

	const measure = () => {
		setWidth = node.scrollWidth / 2;
	};

	const wrap = () => {
		if (setWidth <= 0) return;
		while (x <= -setWidth) x += setWidth;
		while (x > 0) x -= setWidth;
	};

	const render = () => {
		node.style.transform = `translate3d(${x}px, 0, 0)`;
	};

	const releaseCapture = () => {
		if (pointerId === null) return;
		try {
			if (node.hasPointerCapture(pointerId)) node.releasePointerCapture(pointerId);
		} catch {
			/* already released */
		}
	};

	const endGesture = (launch = true) => {
		if (pointerId === null && !held && !pending && !dragging) return;

		releaseCapture();
		const shouldFlick = launch && dragging;
		held = false;
		dragging = false;
		pending = false;
		pointerId = null;
		node.classList.remove('is-dragging');

		if (shouldFlick) {
			velocity = Math.max(-2200, Math.min(2200, velocity));
		} else if (!launch) {
			velocity = 0;
		}
	};

	const tick = (ts: number) => {
		const dt = lastTs ? Math.min((ts - lastTs) / 1000, 0.064) : 0;
		lastTs = ts;

		// While a finger/cursor is down, freeze — so a new swipe can take over mid-coast.
		if (!held && !dragging && dt > 0) {
			if (Math.abs(velocity) > 12) {
				x += velocity * dt;
				velocity *= Math.exp(-3.2 * dt);
				if (Math.abs(velocity) < 12) velocity = 0;
			} else if (!reduced && !(hovered && fineHover())) {
				velocity = 0;
				x -= speed * dt;
			}

			wrap();
			render();
		}

		raf = requestAnimationFrame(tick);
	};

	const onPointerDown = (event: PointerEvent) => {
		if (event.button !== 0 && event.pointerType === 'mouse') return;

		// Interrupt any in-flight flick immediately so the next swipe is registered.
		velocity = 0;
		held = true;
		pending = true;
		dragging = false;
		pointerId = event.pointerId;
		dragOrigin = x;
		dragStartX = event.clientX;
		dragStartY = event.clientY;
		lastMoveX = event.clientX;
		lastMoveT = performance.now();

		try {
			node.setPointerCapture(event.pointerId);
		} catch {
			/* rare: pointer already gone */
		}
	};

	const onPointerMove = (event: PointerEvent) => {
		if (pointerId === null || event.pointerId !== pointerId) return;

		if (pending) {
			const adx = Math.abs(event.clientX - dragStartX);
			const ady = Math.abs(event.clientY - dragStartY);

			if (ady > adx && ady > DRAG_THRESHOLD) {
				// Vertical intent — release and let the page scroll.
				endGesture(false);
				return;
			}

			if (adx <= DRAG_THRESHOLD) return;

			pending = false;
			dragging = true;
			node.classList.add('is-dragging');
		}

		if (!dragging) return;

		const now = performance.now();
		x = dragOrigin + (event.clientX - dragStartX);
		wrap();
		render();

		const sampleDt = (now - lastMoveT) / 1000;
		if (sampleDt > 0.008) {
			velocity = (event.clientX - lastMoveX) / sampleDt;
			lastMoveX = event.clientX;
			lastMoveT = now;
		}

		event.preventDefault();
	};

	const onPointerUp = (event: PointerEvent) => {
		if (pointerId === null || event.pointerId !== pointerId) return;
		endGesture(true);
	};

	const onPointerEnter = () => {
		hovered = true;
	};

	const onPointerLeave = () => {
		hovered = false;
	};

	const onReducedChange = (event: MediaQueryListEvent) => {
		reduced = event.matches;
		if (reduced) velocity = 0;
	};

	node.style.touchAction = 'pan-y';
	node.style.cursor = 'grab';
	node.style.userSelect = 'none';
	node.style.willChange = 'transform';
	node.querySelectorAll('img').forEach((img) => {
		img.setAttribute('draggable', 'false');
	});

	measure();
	render();

	let resizeTimer = 0;
	const resizeObserver = new ResizeObserver(() => {
		window.clearTimeout(resizeTimer);
		resizeTimer = window.setTimeout(() => {
			const prev = setWidth;
			measure();
			if (prev > 0 && setWidth > 0) {
				const progress = ((-x % prev) + prev) % prev;
				x = -((progress / prev) * setWidth);
				wrap();
				render();
			}
		}, 120);
	});
	resizeObserver.observe(node);

	const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
	motionQuery.addEventListener('change', onReducedChange);

	node.addEventListener('pointerdown', onPointerDown);
	node.addEventListener('pointermove', onPointerMove, { passive: false });
	node.addEventListener('pointerup', onPointerUp);
	node.addEventListener('pointercancel', onPointerUp);
	node.addEventListener('pointerenter', onPointerEnter);
	node.addEventListener('pointerleave', onPointerLeave);

	raf = requestAnimationFrame(tick);

	return {
		update(next?: MarqueeOptions) {
			speed = next?.speed ?? MARQUEE_PX_PER_SEC;
		},
		destroy() {
			cancelAnimationFrame(raf);
			window.clearTimeout(resizeTimer);
			resizeObserver.disconnect();
			motionQuery.removeEventListener('change', onReducedChange);
			node.removeEventListener('pointerdown', onPointerDown);
			node.removeEventListener('pointermove', onPointerMove);
			node.removeEventListener('pointerup', onPointerUp);
			node.removeEventListener('pointercancel', onPointerUp);
			node.removeEventListener('pointerenter', onPointerEnter);
			node.removeEventListener('pointerleave', onPointerLeave);
			releaseCapture();
			node.style.removeProperty('transform');
			node.style.removeProperty('touch-action');
			node.style.removeProperty('cursor');
			node.style.removeProperty('user-select');
			node.style.removeProperty('will-change');
			node.classList.remove('is-dragging');
		}
	};
};
