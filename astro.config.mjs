// @ts-check
import { defineConfig } from 'astro/config';
import indexnow from 'astro-indexnow';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.alcoholdetect.com',

  server: {
    host: true
  },

  build: {
    inlineStylesheets: 'always'
  },

  integrations: [
    indexnow({
      // This automatically updates Bing every single time your build pipeline runs!
      key: '9867a9975dcf4e368ebd56f3941b9238',
      enabled: true,
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});