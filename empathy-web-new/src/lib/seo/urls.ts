import { site } from '$data/site';
import { defaultLocale, locales, type Locale } from '$i18n';

/** Absolute localized landing URL, e.g. https://www.empathy-studio.lt/en/ */
export function absoluteLocaleUrl(locale: Locale): string {
	return `${site.url}/${locale}/`;
}

/**
 * Bidirectional hreflang for every locale page.
 * x-default points at Lithuanian (primary market) — root `/` only redirects.
 */
export function hreflangAlternates(): { hreflang: string; href: string }[] {
	return [
		...locales.map((locale) => ({
			hreflang: locale,
			href: absoluteLocaleUrl(locale)
		})),
		{ hreflang: 'x-default', href: absoluteLocaleUrl(defaultLocale) }
	];
}
