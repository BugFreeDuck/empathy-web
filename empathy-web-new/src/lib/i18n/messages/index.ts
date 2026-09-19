import type { Locale } from '../locales';
import type { Messages } from '../types';
import { en } from './en';
import { lt } from './lt';
import { ru } from './ru';

/** All catalogs — add a new locale file and register it here. */
export const catalogs: Record<Locale, Messages> = {
	lt,
	en,
	ru
};
