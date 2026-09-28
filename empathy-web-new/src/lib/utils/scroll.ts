/** Compact scrolled header (`h-16`). Nav jumps always land past the expand threshold. */
const COMPACT_HEADER_PX = 64;

let scrollGen = 0;
let snapTimer = 0;
let rafOuter = 0;
let rafInner = 0;
let onScrollEnd: (() => void) | null = null;
let userInterruptBound = false;

function onUserScrollInterrupt() {
	cancelOngoingScroll('user');
}

function bindUserScrollInterrupt() {
	if (userInterruptBound || typeof window === 'undefined') return;
	userInterruptBound = true;
	window.addEventListener('wheel', onUserScrollInterrupt, { passive: true });
	window.addEventListener('touchmove', onUserScrollInterrupt, { passive: true });
}

function unbindUserScrollInterrupt() {
	if (!userInterruptBound || typeof window === 'undefined') return;
	userInterruptBound = false;
	window.removeEventListener('wheel', onUserScrollInterrupt);
	window.removeEventListener('touchmove', onUserScrollInterrupt);
}

function clearScrollEndListener() {
	if (!onScrollEnd) return;
	window.removeEventListener('scrollend', onScrollEnd);
	onScrollEnd = null;
}

/** Cancel queued frames / snaps and stop an in-flight smooth scroll. */
function cancelOngoingScroll(reason: 'replace' | 'user' = 'replace') {
	scrollGen += 1;
	if (rafOuter) cancelAnimationFrame(rafOuter);
	if (rafInner) cancelAnimationFrame(rafInner);
	rafOuter = rafInner = 0;
	if (snapTimer) window.clearTimeout(snapTimer);
	snapTimer = 0;
	clearScrollEndListener();
	unbindUserScrollInterrupt();
	// Instantly halt CSS/OM smooth scrolling so the next target can take over.
	window.scrollTo({ top: window.scrollY, left: window.scrollX, behavior: 'auto' });
	if (reason === 'user') {
		window.dispatchEvent(new CustomEvent('empathy:scroll-cancel'));
	}
}

function targetScrollTop(el: HTMLElement): number {
	return el.getBoundingClientRect().top + window.scrollY - COMPACT_HEADER_PX;
}

function snapToSection(id: string, gen: number) {
	if (gen !== scrollGen) return;
	const section = document.getElementById(id);
	if (!section) return;
	const top = Math.max(0, targetScrollTop(section));
	if (Math.abs(top - window.scrollY) > 2) {
		window.scrollTo({ top, behavior: 'auto' });
	}
	unbindUserScrollInterrupt();
}

/**
 * Scrolls so the section's top edge (background change) sits flush under the fixed header.
 * A newer call cancels any previous smooth scroll and pending snap.
 * Wheel / touchmove during the animation also cancels so the user can take over.
 */
export function scrollToSection(id: string) {
	cancelOngoingScroll();
	const gen = scrollGen;

	const run = () => {
		if (gen !== scrollGen) return;

		if (id === 'top') {
			bindUserScrollInterrupt();
			window.scrollTo({ top: 0, behavior: 'smooth' });
			history.pushState(null, '', '#top');
			const finishTop = () => {
				if (gen !== scrollGen) return;
				unbindUserScrollInterrupt();
			};
			if ('onscrollend' in window) {
				onScrollEnd = () => {
					if (gen !== scrollGen) return;
					clearScrollEndListener();
					finishTop();
				};
				window.addEventListener('scrollend', onScrollEnd, { once: true });
				snapTimer = window.setTimeout(finishTop, 700);
			} else {
				snapTimer = window.setTimeout(finishTop, 500);
			}
			return;
		}

		const section = document.getElementById(id);
		if (!section) return;

		const top = Math.max(0, targetScrollTop(section));
		bindUserScrollInterrupt();
		window.scrollTo({ top, behavior: 'smooth' });
		history.pushState(null, '', `#${id}`);

		const finish = () => snapToSection(id, gen);

		if ('onscrollend' in window) {
			onScrollEnd = () => {
				if (gen !== scrollGen) return;
				clearScrollEndListener();
				finish();
			};
			window.addEventListener('scrollend', onScrollEnd, { once: true });
			snapTimer = window.setTimeout(finish, 700);
		} else {
			snapTimer = window.setTimeout(finish, 500);
		}
	};

	// Wait a frame so mobile-menu close / overflow restore settle before measuring.
	rafOuter = requestAnimationFrame(() => {
		rafInner = requestAnimationFrame(run);
	});
}
