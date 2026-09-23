/** Compact scrolled header (`h-16`). Nav jumps always land past the expand threshold. */
const COMPACT_HEADER_PX = 64;

let scrollGen = 0;
let snapTimer = 0;
let rafOuter = 0;
let rafInner = 0;
let onScrollEnd: (() => void) | null = null;

function clearScrollEndListener() {
	if (!onScrollEnd) return;
	window.removeEventListener('scrollend', onScrollEnd);
	onScrollEnd = null;
}

/** Cancel queued frames / snaps and stop an in-flight smooth scroll. */
function cancelOngoingScroll() {
	scrollGen += 1;
	if (rafOuter) cancelAnimationFrame(rafOuter);
	if (rafInner) cancelAnimationFrame(rafInner);
	rafOuter = rafInner = 0;
	if (snapTimer) window.clearTimeout(snapTimer);
	snapTimer = 0;
	clearScrollEndListener();
	// Instantly halt CSS/OM smooth scrolling so the next target can take over.
	window.scrollTo({ top: window.scrollY, left: window.scrollX, behavior: 'auto' });
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
}

/**
 * Scrolls so the section's top edge (background change) sits flush under the fixed header.
 * A newer call cancels any previous smooth scroll and pending snap.
 */
export function scrollToSection(id: string) {
	cancelOngoingScroll();
	const gen = scrollGen;

	const run = () => {
		if (gen !== scrollGen) return;

		if (id === 'top') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			history.pushState(null, '', '#top');
			return;
		}

		const section = document.getElementById(id);
		if (!section) return;

		const top = Math.max(0, targetScrollTop(section));
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
