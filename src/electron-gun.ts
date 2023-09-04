import JXG from 'jsxgraph';
import { MathJax, type MathJaxObject } from 'mathjax-full/ts/components/global';

const mathJax = new MathJax({})
const board = JXG.JSXGraph.initBoard('jxgbox', { boundingbox: [-8, 8, 8, -8] });
const p = board.create('point', [1, 3], { name: 'point' });

MathJax.