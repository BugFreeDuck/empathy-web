import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.BASE_PATH ?? ''
		},
		alias: {
			$atoms: 'src/lib/components/atoms',
			$molecules: 'src/lib/components/molecules',
			$organisms: 'src/lib/components/organisms',
			$templates: 'src/lib/components/templates',
			$data: 'src/lib/data',
			$i18n: 'src/lib/i18n'
		}
	}
};

export default config;
