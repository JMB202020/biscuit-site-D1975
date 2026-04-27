import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/D1975',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
