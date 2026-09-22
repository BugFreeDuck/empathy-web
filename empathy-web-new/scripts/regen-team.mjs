import sharp from 'sharp';
import { readFile, writeFile, readdir, unlink } from 'node:fs/promises';
import path from 'node:path';
import { PHOTOS, WARM_MATRIX, WARM_MODULATE, WIDTHS } from './photos.config.mjs';

const outDir = path.resolve('static/photos');
const manifestFile = path.resolve('src/lib/data/photos.generated.ts');
const slugs = ['teacher-emilija', 'teacher-erika', 'teacher-gabija'];

function focusWindow({ width, height }, { x = 0.5, y = 0.5, zoom = 1, aspect }) {
	const targetAspect = aspect ?? width / height;
	let cropH = height / zoom;
	let cropW = cropH * targetAspect;
	if (cropW > width) {
		cropW = width;
		cropH = cropW / targetAspect;
	}
	if (cropH > height) {
		cropH = height;
		cropW = cropH * targetAspect;
	}
	const left = Math.max(0, Math.min(width * x - cropW / 2, width - cropW));
	const top = Math.max(0, Math.min(height * y - cropH / 2, height - cropH));
	return {
		left: Math.round(left),
		top: Math.round(top),
		width: Math.round(cropW),
		height: Math.round(cropH)
	};
}

async function pipeline(entry) {
	const source = path.join(entry.dir, entry.file);
	const meta = await sharp(source).autoOrient().metadata();
	let image = sharp(source).autoOrient();
	if (entry.focus) image = image.extract(focusWindow(meta, entry.focus));
	const cropped = entry.focus
		? focusWindow(meta, entry.focus)
		: { width: meta.width, height: meta.height };
	return {
		width: cropped.width,
		image: image.recomb(WARM_MATRIX).modulate(WARM_MODULATE)
	};
}

let text = await readFile(manifestFile, 'utf8');

for (const slug of slugs) {
	const photo = PHOTOS.find((p) => p.slug === slug);
	const { width: srcWidth } = await pipeline(photo);
	const widths = WIDTHS.filter((w) => w <= srcWidth);
	if (widths.length === 0) widths.push(srcWidth);

	// Remove stale size variants for this slug.
	for (const name of await readdir(outDir)) {
		if (name.startsWith(`${slug}-`) && name.endsWith('.webp')) {
			await unlink(path.join(outDir, name));
		}
	}

	const renders = await Promise.all(
		widths.map(async (w) => {
			const { image } = await pipeline(photo);
			return image
				.resize({ width: w })
				.webp({ quality: 88, effort: 5 })
				.toFile(path.join(outDir, `${slug}-${w}.webp`));
		})
	);

	const largest = renders.at(-1);
	const aspect = +(largest.width / largest.height).toFixed(4);
	text = text.replace(
		new RegExp(`'${slug}': \\{ widths: \\[[^\\]]*\\], aspect: [0-9.]+ \\}`),
		`'${slug}': { widths: [${widths}], aspect: ${aspect} }`
	);

	const previewFrom = path.join(outDir, `${slug}-${widths[widths.length - 1]}.webp`);
	await sharp(previewFrom).jpeg({ quality: 85 }).toFile(path.join(outDir, `_z-${slug}.jpg`));
	console.log(slug, widths, aspect);
}

await writeFile(manifestFile, text);
