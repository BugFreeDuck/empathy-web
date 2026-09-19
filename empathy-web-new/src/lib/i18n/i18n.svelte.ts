import { browser } from '$app/environment';
import { catalogs } from './messages';
import {
	defaultLocale,
	isLocale,
	localeMeta,
	locales,
	type Locale
} from './locales';
import type { Messages } from './types';

const STORAGE_KEY = 'empathy-locale';

function readStoredLocale(): Locale {
	if (!browser) return defaultLocale;
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored && isLocale(stored)) return stored;
	} catch {
		/* private mode / blocked storage */
	}
	return defaultLocale;
}

function applyDocumentLang(next: Locale) {
	if (!browser) return;
	document.documentElement.lang = localeMeta[next].htmlLang;
}

let locale = $state<Locale>(defaultLocale);

if (browser) {
	locale = readStoredLocale();
	applyDocumentLang(locale);
}

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
	setLocale(next: Locale) {
		if (next === locale) return;
		locale = next;
		applyDocumentLang(next);
		if (!browser) return;
		try {
			localStorage.setItem(STORAGE_KEY, next);
		} catch {
			/* ignore */
		}
	}
};

export type { Locale, Messages };
export { catalogs, defaultLocale, isLocale, localeMeta, locales };
