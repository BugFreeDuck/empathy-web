import type { PhotoSlug } from './photos';

export type TeacherId = 'emilija' | 'erika' | 'gabija';

export interface Teacher {
	id: TeacherId;
	slug: PhotoSlug;
	/** Optional object-position override for the portrait crop. */
	position?: string;
}

/** Structural team roster — copy lives in i18n catalogs. */
export const teachers: Teacher[] = [
	{ id: 'emilija', slug: 'teacher-emilija', position: 'center top' },
	{ id: 'gabija', slug: 'teacher-gabija', position: 'center top' },
	{ id: 'erika', slug: 'teacher-erika', position: 'center top' }
];
