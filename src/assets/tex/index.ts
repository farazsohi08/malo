import mathJaxApi from 'mathjax-full';
import * as fs from 'node:fs/promises';
import * as path from 'node:path'


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
const PACKAGES = '*, base, autoload, require, ams, newcommand, mml'.split(/\s*,\s*/);


//
//  Configure MathJax
//
MathJax = {
    loader: {
        paths: {
            mathjax: 'mathjax-full/es5',
            custom: '.'
        },
        source: require('mathjax-full/components/src/source.js').source,
        require: require,
        load: ['input/tex', 'adaptors/liteDOM', '[custom]/mml']
    },
    tex: {packages: PACKAGES},
    startup: {
        pageReady: () => {
            MathJax.tex2mmlPromise(argv._[0] || '', {display: !argv.inline})
                .then(mml => console.log(mml))
                .catch(err => console.log(err));
        }
    }
};

//
//  Load the MathJax startup module
//
require('mathjax-full/components/src/startup/startup.js');

export default async function getMathML() {
  const filePath = path.join(__dirname, 'problem1.tex');
  const tex = await fs.readFile(filePath);

  mathJaxApi.config({
    MathJax: {},
  });

  mathJaxApi.start();
  const mml = await new Promise((resolve, reject) => {
    mathJaxApi.typeset({ math: tex, format: 'TeX', mml: true }, (data) => {
      if (data.errors) reject(data.errors);
      else resolve(data.mml);
    });
  });

  return { data: mml };
}
