import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

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
			base: import.meta.env.DEV ? '' : 'https://github.com/BugFreeDuck/empathy-web'
		}
	}
};

export default config;
