// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Required for canonical URLs, sitemap, and RSS to resolve correctly.
	site: 'https://m5rc238.github.io',

	// Project site: served under /epistemic-resilience/
	base: '/epistemic-resilience',

	// GitHub Pages serves static files only.
	output: 'static',

	trailingSlash: 'always',

	integrations: [mdx()],

	vite: {
		plugins: [tailwindcss()],
	},

	build: {
		// Split long-lived framework/plugin code out of the entry chunk.
		// GSAP plugins are lazy and only load on pages that reference them.
		inlineStylesheets: 'auto',
	},

	markdown: {
		shikiConfig: {
			theme: 'github-dark-default',
			wrap: true,
		},
	},

	prefetch: {
		// Makes in-site navigation feel instant without a client router.
		prefetchAll: true,
		defaultStrategy: 'viewport',
	},
});
