import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { type UserConfig } from 'vite';
import compileTime from 'vite-plugin-compile-time';

export default {
  define: {
    'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
  },
  build: {
    target: 'esnext',
    lib: {
      entry: 'src/web-components.ts',
      formats: ['es'],
      fileName: 'components',
    },
  },
  plugins: [
    compileTime(),
    vue({
      customElement: true,
      template: {
        compilerOptions: {
          // treat all tags with "ce-" prefix as custom elements
          isCustomElement: (tag) => tag.startsWith('ce-'),
        },
      },
    }),
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
} satisfies UserConfig;
