import { studioCoords } from './mapStyles';

export const site = {
	name: 'Empathy',
	tagline: 'space for movement & growth',
	description:
		'Šiuolaikinio šokio studija Vilniuje. Užsiėmimai vaikams, paaugliams ir suaugusiems — judesys, ryšys ir sąmoningumas saugioje erdvėje.',
	url: 'https://www.empathy-studio.lt',
	city: 'Vilnius',
	country: 'Lietuva',
	countryCode: 'LT',
	registrationUrl:
		'https://docs.google.com/forms/d/e/1FAIpQLScEL6M-bLxUNIufIX8MuHm9402mSsuWmaiHDPRR94OV89lQ2w/viewform',
	seo: {
		title: 'Empathy — šiuolaikinio šokio studija Vilniuje | pradedantiesiems ir patyrusiems',
		description:
			'Empathy — šiuolaikinio šokio studija Vilniuje, Lietuvoje. Pamokos pradedantiesiems ir patyrusiems šokėjams. Empatija ir savivertė — studijos pagrindas.',
		ogTitle: 'Empathy — šiuolaikinio šokio studija Vilniuje',
		ogImage: 'https://www.empathy-studio.lt/photos/hero-wide-1600.webp',
		ogImageAlt: 'Empathy šokio studijos erdvė Vilniuje — šiuolaikinis šokis',
		locale: 'lt_LT',
		keywords: [
			'šokio studija Vilnius',
			'šiuolaikinis šokis Lietuva',
			'šokiai pradedantiesiems Vilnius',
			'šokio pamokos vaikams ir suaugusiems',
			'Empathy studio',
			'empatija šokis',
			'savivertė per judesį'
		]
	}
};

export const sections = [
	{ id: 'apie' },
	{ id: 'tvarkarastis' },
	{ id: 'kainos' },
	{ id: 'kontaktai' }
] as const;

export type SectionId = (typeof sections)[number]['id'];

export const contacts = {
	address: 'Eitminų g. 20, Vilnius',
	/** Google Maps place for Empathy studio (not the bare street address). */
	addressUrl: 'https://maps.app.goo.gl/9gn7do6Hx8U2P99B8',
	phone: '+370 689 25525',
	email: 'empathy.vilnius@gmail.com',
	mapEmbedUrl:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2303.3183747637104!2d25.215930313233716!3d54.739203569487714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd91af72194475%3A0x8c1502f3a4ec356f!2sempathy%20%7C%20space%20for%20movement%20%26%20growth!5e0!3m2!1sen!2sus!4v1758888931184!5m2!1sen!2sus'
};

export const socials = [
	{ label: 'Instagram', href: 'https://www.instagram.com/empathy.movement/', handle: '@empathy.movement' },
	{ label: 'Facebook', href: 'https://www.facebook.com/empathyvilnius', handle: 'empathyvilnius' },
	{ label: 'YouTube', href: 'https://www.youtube.com/@empathyvilnius', handle: '@empathyvilnius' }
] as const;

/** JSON-LD for DanceSchool / LocalBusiness — used in +page.svelte. */
export const structuredData = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'WebSite',
			'@id': `${site.url}/#website`,
			url: site.url,
			name: site.name,
			description: site.seo.description,
			inLanguage: 'lt-LT',
			publisher: { '@id': `${site.url}/#studio` }
		},
		{
			'@type': ['DanceSchool', 'LocalBusiness'],
			'@id': `${site.url}/#studio`,
			name: 'Empathy',
			alternateName: 'Empathy | space for movement & growth',
			description: site.seo.description,
			url: site.url,
			image: site.seo.ogImage,
			logo: `${site.url}/favicon.svg`,
			telephone: contacts.phone,
			email: contacts.email,
			slogan: site.tagline,
			foundingLocation: {
				'@type': 'Place',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Vilnius',
					addressCountry: 'LT'
				}
			},
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'Eitminų g. 20',
				addressLocality: 'Vilnius',
				postalCode: '12118',
				addressRegion: 'Vilniaus apskritis',
				addressCountry: 'LT'
			},
			geo: {
				'@type': 'GeoCoordinates',
				latitude: studioCoords.lat,
				longitude: studioCoords.lng
			},
			hasMap: contacts.addressUrl,
			areaServed: [
				{ '@type': 'City', name: 'Vilnius' },
				{ '@type': 'Country', name: 'Lithuania' }
			],
			sameAs: socials.map((s) => s.href),
			knowsAbout: [
				'šiuolaikinis šokis',
				'modernus šokis',
				'šokio pamokos pradedantiesiems',
				'šokio pamokos patyrusiems',
				'empatija',
				'savivertė',
				'judesys ir sąmoningumas',
				'šokiai vaikams',
				'šokiai paaugliams',
				'šokiai suaugusiems'
			],
			audience: {
				'@type': 'Audience',
				audienceType: 'Pradedantieji ir patyrę šokėjai; vaikai, paaugliai ir suaugusieji'
			},
			isAccessibleForFree: false,
			priceRange: '€',
			currenciesAccepted: 'EUR',
			amenityFeature: [
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Priima visiškus pradedančiuosius',
					value: true
				},
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Priima patyrusius šokėjus',
					value: true
				},
				{
					'@type': 'LocationFeatureSpecification',
					name: 'Empatija ir savivertė — pagrindiniai principai',
					value: true
				}
			]
		}
	]
} as const;
