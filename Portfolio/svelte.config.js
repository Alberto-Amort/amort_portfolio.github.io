import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            pages: 'docs',
            assets: 'docs',
            fallback: undefined,
            precompress: false,
            strict: true
        }),

        paths: {
            base: 
            process.argv.includes('dev') ? '' : "/amort_portfolio.github.io"
        }
	}
};
export default config;