import type { Handle } from '@sveltejs/kit';
import { isLocale } from '$i18n';

/** Replace %lang% in app.html so each prerendered page has the correct html lang. */
export const handle: Handle = async ({ event, resolve }) => {
	const segment = event.url.pathname.split('/').filter(Boolean)[0];
	const lang = segment && isLocale(segment) ? segment : 'lt';

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
