import { error } from '@sveltejs/kit';
import { i18n, isLocale, locales, type Locale } from '$i18n';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => locales.map((locale) => ({ locale }));

export const load: PageLoad = ({ params }) => {
	const locale = params.locale;
	if (!isLocale(locale)) error(404, 'Unknown locale');

	i18n.setLocale(locale as Locale);

	return { locale: locale as Locale };
};
