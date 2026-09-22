/**
 * Encode Downloads/hero2.mov into a muted, loop-friendly hero MP4 + poster.
 * Sized for full-bleed cover without oversized decode cost on resize.
 */
import { mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.resolve('C:/Users/Gabrielius/Downloads/hero2.mov');
const outDir = path.join(root, 'static/videos');

async function run(cmd, args) {
	await new Promise((resolve, reject) => {
		const child = spawn(cmd, args, { stdio: 'inherit', shell: false });
		child.on('error', reject);
		child.on('close', (code) =>
			code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`))
		);
	});
}

await access(source);
await mkdir(outDir, { recursive: true });

const mp4 = path.join(outDir, 'hero.mp4');
const poster = path.join(outDir, 'hero-poster.webp');

// 1280 wide is enough for hero cover on retina; much cheaper to rescale live.
const scale = "scale=1280:-2:flags=lanczos";

console.log('Encoding hero.mp4…');
await run('ffmpeg', [
	'-y',
	'-i',
	source,
	'-an',
	'-vf',
	scale,
	'-c:v',
	'libx264',
	'-profile:v',
	'main',
	'-pix_fmt',
	'yuv420p',
	'-crf',
	'23',
	'-preset',
	'medium',
	'-movflags',
	'+faststart',
	'-g',
	'60',
	mp4
]);

console.log('Extracting poster…');
await run('ffmpeg', [
	'-y',
	'-ss',
	'2',
	'-i',
	source,
	'-frames:v',
	'1',
	'-vf',
	scale,
	'-c:v',
	'libwebp',
	'-quality',
	'82',
	poster
]);

console.log('Done →', outDir);
