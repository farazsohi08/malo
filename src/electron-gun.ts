import JXG from 'jsxgraph';

const board = JXG.JSXGraph.initBoard('jxgbox', { boundingbox: [-8, 8, 8, -8] });
const p = board.create('point', [1, 3], { name: 'point' });
