import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { type UserConfig } from 'vite';
import compileTime from 'vite-plugin-compile-time';
// import eslintPlugin from 'vite-plugin-eslint';
import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss';
// import htmlPurge from 'vite-plugin-html-purgecss'

export default {
  plugins: [
    compileTime(),
    vue(),
    pluginPurgeCss({
      content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
      defaultExtractor(content: string) {
        const contentWithoutStyleBlocks = content.replaceAll(
          /<style[^]+?<\/style>/gi,
          '',
        );
        return contentWithoutStyleBlocks.match(/[\w/:-]*[\w/-]+/g) ?? [];
      },
      safelist: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
        /data-v-.*/,
      ],
    }),
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('src', import.meta.url)) } },

  // css: { transformer: 'lightningcss', lightningcss: { cssModules: {} } },
  // build: { cssMinify: 'lightningcss' },
} satisfies UserConfig;
