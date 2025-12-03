// @ts-check
import { defineConfig } from 'astro/config';
import path from "path";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en"
  }
});