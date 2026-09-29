const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svg = fs.readFileSync(path.join('static', 'favicon.svg'));

async function writePng(filename, size, background) {
	await sharp(svg, { density: 384 })
		.resize(size, size, { fit: 'contain', background })
		.png()
		.toFile(path.join('static', filename));
	console.log('wrote', filename, size);
}

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };
const sand = { r: 253, g: 247, b: 243, alpha: 1 };

(async () => {
	await writePng('favicon-48x48.png', 48, transparent);
	await writePng('favicon-96x96.png', 96, transparent);
	await writePng('favicon-192x192.png', 192, transparent);
	await writePng('favicon.png', 96, transparent);
	await writePng('apple-touch-icon.png', 180, sand);
})().catch((err) => {
	console.error(err);
	process.exit(1);
});
