import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = process.argv[2];
const OUT = process.argv[3];
const COLS = 6;
const CELL = 300;

const files = (await readdir(SRC)).filter((f) => /\.jpe?g$/i.test(f)).sort();
const rows = Math.ceil(files.length / COLS);

const tiles = await Promise.all(
	files.map(async (file, i) => ({
		input: await sharp(path.join(SRC, file)).resize(CELL, CELL, { fit: 'cover' }).toBuffer(),
		left: (i % COLS) * CELL,
		top: Math.floor(i / COLS) * CELL
	}))
);

await sharp({
	create: { width: COLS * CELL, height: rows * CELL, channels: 3, background: '#000' }
})
	.composite(tiles)
	.jpeg({ quality: 80 })
	.toFile(OUT);

files.forEach((f, i) => console.log(`${i} (r${Math.floor(i / COLS)} c${i % COLS}): ${f}`));
