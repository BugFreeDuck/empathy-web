/**
 * Maps curated source photographs to the slugs used by `src/lib/data/photos.ts`.
 * Source: 2024 Empathy photoshoot only.
 */
export const SOURCE_DIR = 'C:/Users/Gabrielius/Documents/Empathy foto/2024 Photoshoot';

export const PHOTOS = [
	{ slug: 'hero-wide', file: 'ABD_8330.jpg' },
	{ slug: 'hero-tall', file: 'ABD_8615 (1).jpg' },
	{ slug: 'studio-arches', file: 'ABD_8312.jpg' },
	{ slug: 'group-profile', file: 'ABD_8218 copy.jpg' },
	{ slug: 'group-stairs', file: 'ABD_8195 copy.jpg' },
	{ slug: 'group-embrace', file: 'ABD_8227 copy.jpg' },
	{ slug: 'group-reach', file: 'ABD_8255.jpg' },
	{ slug: 'solo-arch', file: 'ABD_7858.jpg' },
	{ slug: 'solo-motion', file: 'ABD_7655 (2).jpg' },
	{
		slug: 'founder',
		file: 'ABD_7919 copy.jpg',
		// 4:5 portrait centred on Olivija — modest zoom so more of the frame shows.
		focus: { x: 0.52, y: 0.36, zoom: 2.2, aspect: 4 / 5 }
	},
	{ slug: 'hands', file: 'ABD_7992.jpg' },
	{ slug: 'blooms', file: 'ABD_7862.jpg' },
	{ slug: 'bloom-soft', file: 'ABD_7782.jpg' },
	{ slug: 'veil', file: 'ABD_8487.jpg' }
];

export const WIDTHS = [640, 1024, 1600, 2400];

/**
 * A light warm pass, nothing more. Blue is trimmed by a few percent so the
 * studio's cyclorama settles onto the sand page instead of reading cold, and
 * the rest of the frame is left alone — the photographs carry their own light.
 *
 * Resist strengthening these. Anything heavier turns skin orange and the
 * gerberas red, which is exactly what the earlier grade got wrong.
 */
export const WARM_MATRIX = [
	[1.03, 0.02, 0.0],
	[0.01, 1.0, 0.0],
	[0.0, 0.02, 0.95]
];

export const WARM_MODULATE = { saturation: 1.02, brightness: 1.0 };
