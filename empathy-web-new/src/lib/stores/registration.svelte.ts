/** Shared registration modal open state for CTAs across the page. */
let open = $state(false);

export const registrationUI = {
	get open() {
		return open;
	},
	show() {
		open = true;
	},
	hide() {
		open = false;
	}
};
