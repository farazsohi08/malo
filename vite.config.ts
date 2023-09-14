import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { type UserConfig } from 'vite';
import compileTime from 'vite-plugin-compile-time';

export default {
  plugins: [compileTime(), vue()],
  resolve: { alias: { '@': fileURLToPath(new URL('src', import.meta.url)) } },

  // css: { transformer: 'lightningcss', lightningcss: { cssModules: {} } },
  // build: { cssMinify: 'lightningcss' },
} satisfies UserConfig;
