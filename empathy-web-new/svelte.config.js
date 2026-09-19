import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		alias: {
			$atoms: 'src/lib/components/atoms',
			$molecules: 'src/lib/components/molecules',
			$organisms: 'src/lib/components/organisms',
			$templates: 'src/lib/components/templates',
			$data: 'src/lib/data'
		}
	}
};

export default config;
