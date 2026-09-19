import { photoFiles, type PhotoSlug } from './photos.generated';

export { photoFiles, type PhotoSlug };

/** Alt text for every graded photograph in `static/photos`. */
export const photoAlt: Record<PhotoSlug, string> = {
	'hero-wide': 'Empathy studijos šokėjos guli ratu, susikibusios už rankų',
	'hero-tall': 'Šokėja judesyje su baltu skraiste smėlio fone',
	'studio-arches': 'Šokėjų grupė guli ratu, susikibusios už rankų',
	'group-profile': 'Jaunosios Empathy šokėjos sėdi eilėje raudonomis pirštinėmis',
	'group-stairs': 'Šokėjos guli studijos grindyse raudonais kostiumais',
	'group-embrace': 'Jaunosios šokėjos guli eilėje, smakrus remdamos į delnus',
	'group-reach': 'Šokėjų grupė ekspresyviuose judesiuose šviesioje studijoje',
	'solo-arch': 'Šokėja atsispindi apvaliame veidrodyje smėlio tonų drabužiais',
	'solo-motion': 'Šokėja su plačia bronzine skraiste žvelgia per petį',
	founder: 'Studijos įkūrėja Olivija — portretas šviesioje studijoje',
	hands: 'Šokėjų kojos ir pėdos eilėje baltose studijos kelnėse',
	blooms: 'Šokėja atsispindi veidrodyje tarp tekančio audinio',
	'bloom-soft': 'Olivija stovi prie lango bronziniais drabužiais',
	veil: 'Šokėja išsilenkusi atgal su tekančia balta skraiste'
};

/**
 * Two rows of a 12-column grid. Each pair's ratio matches its column span so
 * both tiles in a row land on the same height.
 */
export const aboutMosaic = [
	{ slug: 'group-embrace', span: 'md:col-span-7', ratio: 'aspect-[7/5]' },
	{ slug: 'solo-motion', span: 'md:col-span-5', ratio: 'aspect-square' },
	{ slug: 'veil', span: 'md:col-span-5', ratio: 'aspect-square' },
	{ slug: 'studio-arches', span: 'md:col-span-7', ratio: 'aspect-[7/5]' }
] satisfies { slug: PhotoSlug; span: string; ratio: string }[];
