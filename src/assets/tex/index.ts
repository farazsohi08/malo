import fg from 'fast-glob';
import katex from 'katex';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import type { CompileTimeFunction } from 'vite-plugin-compile-time';

/*
 * The mml extension defines \mi{}, \mo{}, \mn{}, \ms{}, \mtext{} for creating
 * MathML token elements by hand.  They take an optional bracketed argument
 * that gives the attributes for the element, e.g.
 *
 *    \mi[mathvariant="bold-italic"]{abc}
 *
 * The text for the token element is taken as a literal string, except for
 * the special sequence \uXXXX, which produces the unicode character U+XXXX.
 */

//
//  The default TeX packages to use
//
// const PACKAGES = 'base, autoload, require, ams, newcommand, mml'.split(/\s*,\s*/);
// const PACKAGES = '*'.split(/\s*,\s*/);

// const init = require('mathjax-full')
//
//  Configure MathJax
//
// MathJax = {
//     loader: {
//         paths: {
//             mathjax: 'mathjax-full/es5',
//             custom: '.'
//         },
//         source: require('mathjax-full/components/src/source.js').source,
//         require: require,
//         load: ['input/tex', 'adaptors/liteDOM', '[custom]/mml']
//     },
//     tex: {packages: PACKAGES},
//     startup: {
//         pageReady: () => {
//             MathJax.tex2mmlPromise(argv._[0] || '', {display: !argv.inline})
//                 .then(mml => console.log(mml))
//                 .catch(err => console.log(err));
//         }
//     }
// };

//
//  Load the MathJax startup module
//
// require('mathjax-full/components/src/startup/startup.js');

const renderedTex: CompileTimeFunction = async () => {
  const texFiles = await fg('./**/*.tex', { absolute: true });

  const filePath = path.join(__dirname, 'problem1.tex');
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
