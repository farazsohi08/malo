import fg from 'fast-glob';
import katex from 'katex';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import type { CompileTimeFunction } from 'vite-plugin-compile-time';

const renderedTex: CompileTimeFunction = async ({ root }) => {
  const texFiles = await fg('./**/*.tex', { absolute: true });

  const filePath = path.join(root, 'src/assets/tex/problem1.tex');
  const tex = await fs.readFile(filePath);

  const html = katex.renderToString(tex.toString('utf8'), {
    // output: 'mathml',
    trust: true,
    strict: false,
  });

  // const htmlWithNewlineFix = html.replaceAll(
  //   '<mspace linebreak="newline"></mspace>',
  //   '</math>$&<math>',
  // );

  return { data: html, watchFiles: texFiles };
  // return { data: htmlWithNewlineFix, watchFiles: texFiles };
};

export default renderedTex;
