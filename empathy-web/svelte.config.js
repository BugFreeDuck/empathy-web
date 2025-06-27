import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import {process} from 'node/process'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'fallback.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: import.meta.env.argv.includes('dev') ? '' : import.meta.env.BASE_URL
		}
	}
};

export default config;
