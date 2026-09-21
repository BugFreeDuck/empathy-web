/**
 * Maps curated source photographs to the slugs used by `src/lib/data/photos.ts`.
 *
 * `SOURCE_DIR` — studio photoshoot (hero + founder).
 * `GALLERY_DIR` — continuous about-section carousel frames.
 */
export const SOURCE_DIR = 'C:/Users/Gabrielius/Documents/Empathy foto/2024 Photoshoot';
export const GALLERY_DIR = 'C:/Users/Gabrielius/Downloads/Smash';

const galleryFiles = [
	'671222270_18010962977850041_7516351511973824887_n.jpg',
	'702894058_18014262377850041_1467138837357914649_n.jpg',
	'708049385_18015170987850041_6704141021185387209_n.jpg',
	'708155000_18015170966850041_8590951875628854065_n.jpg',
	'710446474_18015892760850041_9043551191189729978_n.jpg',
	'712357783_18015892778850041_3015418177914990071_n.jpg',
	'DSC_1250.jpg',
	'DSC02371.jpg',
	'DSC02600.jpg',
	'DSC02605.jpg',
	'DSC03155.jpg',
	'DSC03248.jpg',
	'DSC04723.jpg',
	'DSC07894.jpg',
	'DSC08075.JPG',
	'DSC08086.JPG',
	'DSC08891.JPG',
	'DSC08893.JPG',
	'olivija100-16.jpg',
	'P1120245.jpg',
	'P1120614.jpg',
	'P1120861.jpg',
	'P1130095.jpg',
	'photo_2026-08-05_13-18-58.jpg',
	'photo_2026-09-21_19-36-44.jpg',
	'photo_2026-09-21_19-38-04.jpg',
	'photo_2026-09-21_19-38-40 (2).jpg',
	'photo_2026-09-21_19-38-40.jpg',
	'PXL_20260315_110519684.MP.jpg'
];

export const PHOTOS = [
	{ slug: 'hero-wide', file: 'ABD_8113 copy.jpg', dir: SOURCE_DIR },
	{
		slug: 'founder',
		file: 'ABD_7919 copy.jpg',
		dir: SOURCE_DIR,
		// 4:5 portrait centred on Olivija — modest zoom so more of the frame shows.
		focus: { x: 0.52, y: 0.36, zoom: 2.2, aspect: 4 / 5 }
	},
	...galleryFiles.map((file, index) => ({
		slug: `gallery-${String(index + 1).padStart(2, '0')}`,
		file,
		dir: GALLERY_DIR
	}))
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
