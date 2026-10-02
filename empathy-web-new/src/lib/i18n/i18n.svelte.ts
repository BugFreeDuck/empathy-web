import { browser } from '$app/environment';
import { catalogs } from './messages';
import {
	defaultLocale,
	isLocale,
	LOCALE_STORAGE_KEY,
	localeMeta,
	locales,
	type Locale
} from './locales';
import type { Messages } from './types';

function applyDocumentLang(next: Locale) {
	if (!browser) return;
	document.documentElement.lang = localeMeta[next].htmlLang;
}

function persistLocale(next: Locale) {
	if (!browser) return;
	try {
		localStorage.setItem(LOCALE_STORAGE_KEY, next);
	} catch {
		/* ignore */
	}
}

/** Active catalog follows the URL (`/[locale]/`). Preference is remembered in localStorage. */
let locale = $state<Locale>(defaultLocale);

/** Reactive i18n API. Use `i18n.m` for the active catalog. */
export const i18n = {
	get locale(): Locale {
		return locale;
	},
	get m(): Messages {
		return catalogs[locale];
	},
	get locales() {
		return locales;
	},
	meta(code: Locale = locale) {
		return localeMeta[code];
	},
	/** Sync catalog to the route locale (SSR load + client navigation). */
	setLocale(next: Locale) {
		if (!isLocale(next)) return;
		if (next !== locale) {
			locale = next;
			applyDocumentLang(next);
		}
		persistLocale(next);
	}
};

export type { Locale, Messages };
export { catalogs };
export {
	defaultLocale,
	isLocale,
	LOCALE_STORAGE_KEY,
	localeMeta,
	locales,
	localeFromLanguageTags,
	resolvePreferredLocale
} from './locales';
