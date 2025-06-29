import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import * as dotenv from 'dotenv';

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: '404.html',
		}),
		paths: {
			base: process.env.NODE_ENV === 'production'
				?  process.env.VITE_BASE_URL
				: '',
		}
	}
};

export default config;
