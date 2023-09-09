import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import compileTime from "vite-plugin-compile-time"
import { type UserConfig } from 'vite';

export default {
  plugins: [compileTime(), vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // css: { transformer: 'lightningcss', lightningcss: { cssModules: {} } },
  // build: { cssMinify: 'lightningcss' },
} satisfies UserConfig;
