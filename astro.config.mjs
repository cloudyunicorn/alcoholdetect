// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import process from 'node:process';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import indexnow from 'astro-indexnow';

// Load environment variables (reads from .env files)
const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');
const INDEXNOW_KEY = env.INDEXNOW_KEY || process.env.INDEXNOW_KEY || '9867a9975dcf4e368ebd56f3941b9238';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.alcoholdetect.com',
  integrations: [
    sitemap(),
    indexnow({
      key: INDEXNOW_KEY,
      enabled: true,
    }),
  ],
  server: {
    host: true
  },
  vite: {
    plugins: [tailwindcss()]
  }
});