/**
 * Scrolls so the element's top edge meets the top of the viewport.
 */
export function scrollToSection(id: string) {
	const el = document.getElementById(id);
	if (!el) return;

	const top = el.getBoundingClientRect().top + window.scrollY;
	window.scrollTo({ top, behavior: 'smooth' });
	history.pushState(null, '', `#${id}`);
}
