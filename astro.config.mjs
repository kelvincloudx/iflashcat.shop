import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://iflashcat.lol',
  integrations: [sitemap()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
