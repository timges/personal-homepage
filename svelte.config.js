import adapter from '@sveltejs/adapter-vercel';
import { sveltePreprocess } from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		sveltePreprocess({
			scss: {
				includePaths: ['src/sass']
			}
		})
	],

	kit: {
		// Explicit Vercel adapter (replaces adapter-auto, which tried to
		// npm-install this at build time and failed peer resolution).
		// See https://kit.svelte.dev/docs/adapter-vercel for options.
		adapter: adapter()
	}
};

export default config;
