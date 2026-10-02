import { isLocale } from '$i18n';

/** SvelteKit param matcher — only lt | en | ru match `[locale=locale]`. */
export function match(param: string): boolean {
	return isLocale(param);
}
