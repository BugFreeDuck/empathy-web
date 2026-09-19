/** Supported UI languages. Add a code here, then a messages/<code>.ts file. */
export const locales = ['lt', 'en', 'ru'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'lt';

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
