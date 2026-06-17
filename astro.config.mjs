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
      hostname: 'www.alcoholdetect.com',
      enabled: true,
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});