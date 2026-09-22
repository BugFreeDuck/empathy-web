import { photoFiles, type PhotoSlug } from './photos.generated';

export { photoFiles, type PhotoSlug };

const gallerySlugs = Object.keys(photoFiles).filter((slug): slug is PhotoSlug =>
	slug.startsWith('gallery-')
);

/** Alt text for every graded photograph in `static/photos`. */
export const photoAlt: Record<PhotoSlug, string> = {
	'hero-wide': 'Empathy šokėjos baltose suknelėse kelia rankas studijoje',
	founder: 'Studijos įkūrėja Olivija — portretas šviesioje studijoje',
	'teacher-emilija': 'Mokytoja Emilija — portretas Empathy studijoje',
	'teacher-erika': 'Mokytoja Erika — portretas Empathy studijoje',
	'teacher-gabija': 'Mokytoja Gabija — portretas Empathy studijoje',
	...Object.fromEntries(
		gallerySlugs.map((slug, index) => [
			slug,
			`Empathy studijos akimirka ${index + 1}`
		])
	)
} as Record<PhotoSlug, string>;

/**
 * Continuous about-section photo strip (duplicated in the carousel for a seamless loop).
 * Fixed curated order — interleaves portrait/landscape, spaces greyscale frames apart
 * (never adjacent), and separates near-duplicate shots so SSR and hydration stay stable.
 * Founder stays in the dedicated block below.
 *
 * Greyscale: gallery-01, 05, 08, 09, 11.
 */
const aboutCarouselOrder: PhotoSlug[] = [
	'gallery-07',
	'gallery-01',
	'gallery-19',
	'gallery-04',
	'gallery-12',
	'gallery-14',
	'gallery-08',
	'gallery-22',
	'gallery-15',
	'gallery-03',
	'gallery-20',
	'gallery-11',
	'gallery-23',
	'gallery-29',
	'gallery-16',
	'gallery-05',
	'gallery-13',
	'gallery-28',
	'gallery-17',
	'gallery-02',
	'gallery-09',
	'gallery-24',
	'gallery-21',
	'gallery-06',
	'gallery-10',
	'gallery-25',
	'gallery-18',
	'gallery-26',
	'gallery-27'
];

export const aboutCarousel = [
	...aboutCarouselOrder.filter((slug) => gallerySlugs.includes(slug)),
	...gallerySlugs.filter((slug) => !aboutCarouselOrder.includes(slug))
];
