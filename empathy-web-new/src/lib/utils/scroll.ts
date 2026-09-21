/** Compact (scrolled) header height — matches `h-16` on `SiteHeader`. */
const HEADER_OFFSET_PX = 64;

/**
 * Scrolls so the section's top edge sits flush under the fixed header.
 */
export function scrollToSection(id: string) {
	const run = () => {
		if (id === 'top') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			history.pushState(null, '', '#top');
			return;
		}

		const el = document.getElementById(id);
		if (!el) return;

		const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;
		window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
		history.pushState(null, '', `#${id}`);
	};

	// Wait a frame so mobile-menu close / overflow restore settle before measuring.
	requestAnimationFrame(() => requestAnimationFrame(run));
}
