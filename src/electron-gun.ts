import {mathjax} from 'mathjax-full/js/mathjax';
import { TeX } from 'mathjax-full/js/input/tex.js';
import { CHTML } from 'mathjax-full/js/output/chtml.js';
import font from 'mathjax-full/ts/output/chtml/fonts/tex';
import { browserAdaptor } from 'mathjax-full/js/adaptors/browserAdaptor';
;
// Register the HTML document handler
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html';

RegisterHTMLHandler(browserAdaptor());

const html = mathjax.document(document, {
  InputJax: new TeX({
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    packages: ['base', 'ams', 'noundefined', 'newcommand', 'boldsymbol']
  }),
  OutputJax: new CHTML({
    fontURL: font
  })
});

//
//  Process the document
//
html.findMath()
  .compile()
  .getMetrics()
  .typeset()
  .updateDocument();

// import JXG from 'jsxgraph';
// import { mathjax } from 'mathjax-full/js/mathjax';
// import { TeX } from 'mathjax-full/js/input/tex'
// import { SVG } from 'mathjax-full/js/output/svg'
// import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages'
// import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor'
// import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html'

// const adaptor = liteAdaptor()
// RegisterHTMLHandler(adaptor)

// const mathjax_document = mathjax.document('', {
//   InputJax: new TeX({ packages: AllPackages }),
//   OutputJax: new SVG({ fontCache: 'local' })
// })

// const mathjax_options = {
//   em: 16,
//   ex: 8,
//   containerWidth: 1280
// }

// export function get_mathjax_svg(math: string): string {
//   const node = mathjax_document.convert(math, mathjax_options)
//   return adaptor.innerHTML(node)
// }

// const mathJax: MathJaxObject = new MathJaxObject({
//   options: {
//     renderActions: {
//       addMenu: [0, '', ''],
//     },
//   },
//   chtml: {
//     scale: 2.5,
//   },
// });
// const board = JXG.JSXGraph.initBoard('jxgbox', { boundingbox: [-8, 8, 8, -8] });
// const p = board.create('point', [1, 3], { name: 'point' });

// // mathJax.

const code = `
$U_$H can be varied from 0-10 V
$U_$A can be varied from 0-10 KV
$U_$W can be varied from 0-10 KV
$$\f($U_$H)=\begin{cases}true&($U_$H\leq2.5)&false&($U_$H\gt2.5)\end{cases}$$
`;

// with auto-complete/suggestions and documentation (IntelliSense)
// let html = mathJax.tex2chtml('\frac{abc}{123}');
// document.body.appendChild(html);

// console.log(get_mathjax_svg(code))