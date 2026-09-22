/**
 * Encode Downloads/hero1.mp4 into muted, loop-friendly hero assets.
 *
 * Outputs:
 *   static/videos/hero.mp4   — H.264, no audio, faststart (full source width)
 *   static/videos/hero.webm  — VP9, no audio
 *   static/videos/hero-poster.webp — mid-frame poster
 */
import { mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.resolve('C:/Users/Gabrielius/Downloads/hero1.mp4');
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
const webm = path.join(outDir, 'hero.webm');
const poster = path.join(outDir, 'hero-poster.webp');

// Keep source resolution (1920×1200) — right-panel hero is large on retina.
const scale = 'scale=1920:-2';

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
	'high',
	'-pix_fmt',
	'yuv420p',
	'-crf',
	'18',
	'-preset',
	'slow',
	'-movflags',
	'+faststart',
	mp4
]);

console.log('Encoding hero.webm…');
await run('ffmpeg', [
	'-y',
	'-i',
	source,
	'-an',
	'-vf',
	scale,
	'-c:v',
	'libvpx-vp9',
	'-b:v',
	'0',
	'-crf',
	'28',
	'-cpu-used',
	'2',
	'-row-mt',
	'1',
	webm
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
	'90',
	poster
]);

console.log('Done →', outDir);
