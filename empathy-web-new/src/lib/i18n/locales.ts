/** Supported UI languages. Add a code here, then a messages/<code>.ts file. */
export const locales = ['lt', 'en', 'ru'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'lt';

/** Persisted when the user visits or switches to a locale URL. */
export const LOCALE_STORAGE_KEY = 'empathy-locale';

export const localeMeta: Record<
	Locale,
	{ label: string; htmlLang: string; ogLocale: string }
> = {
	lt: { label: 'LT', htmlLang: 'lt', ogLocale: 'lt_LT' },
	en: { label: 'EN', htmlLang: 'en', ogLocale: 'en_US' },
	ru: { label: 'RU', htmlLang: 'ru', ogLocale: 'ru_RU' }
};

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}

/** Match Accept-Language / navigator tags (e.g. en-US → en). */
export function localeFromLanguageTags(tags: readonly string[]): Locale | null {
	for (const raw of tags) {
		const primary = raw.trim().toLowerCase().split('-')[0];
		if (primary && isLocale(primary)) return primary;
	}
	return null;
}

/**
 * Last chosen locale (localStorage), else browser preference, else Lithuanian.
 * Call only in the browser.
 */
export function resolvePreferredLocale(): Locale {
	try {
		const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
		if (stored && isLocale(stored)) return stored;
	} catch {
		/* private mode / blocked storage */
	}

	const tags =
		typeof navigator !== 'undefined' && navigator.languages?.length
			? navigator.languages
			: typeof navigator !== 'undefined' && navigator.language
				? [navigator.language]
				: [];

	return localeFromLanguageTags(tags) ?? defaultLocale;
}
