import JXG from 'https://cdn.jsdelivr.net/npm/jsxgraph@1.6.1/distrib/jsxgraphcore.mjs';
import uniqueId from 'lodash-es/uniqueId';

import {
  create,
  defaulted,
  func,
  number,
  object,
  optional,
  string,
  type Infer,
  type Struct,
} from 'superstruct';

const OptionsSchema = object({
  tagName: string(),
  graphFunction: func() as unknown as Struct<
    (x: number, y: number) => number,
    null
  >,
  xLabel: defaulted(optional(string()), 'x', { strict: true }),
  yLabel: defaulted(optional(string()), 'y', { strict: true }),
  zLabel: defaulted(optional(string()), 'z', { strict: true }),
  zScale: defaulted(optional(number()), 1, { strict: true }),
});

type Options = Infer<typeof OptionsSchema>;

export function createGraphElement(options: Options) {
  const { tagName, graphFunction, xLabel, yLabel, zLabel, zScale } = create(
    options,
    OptionsSchema,
  ) as Required<Options>;

  const Klass = class extends HTMLDivElement {
    private board?: JXG.Board;

    private initId() {
      if (this.id) return;

      this.id = `jxgbox-${uniqueId()}`;
    }

    private initClassName() {
      this.classList.add(
        'jxgbox',
        'mx-auto',
        'aspect-square',
        'w-full',
        'max-w-[50rem]',
      );
    }

    private initGraph(id: string) {
      const board = JXG.JSXGraph.initBoard(id, {
        renderer: 'svg',
        boundingbox: [-8, 8, 8, -8],
        keepaspectratio: false,
        axis: false,
      });

      this.board = board;

      const zBound = [0, 3];
      const xyBound = [0, 10];
      const view = board.create(
        'view3d',
        [
          [-5, -5],
          [10, 10],
          [xyBound, xyBound, zBound],
        ],
        { xPlaneRear: { visible: false }, yPlaneRear: { visible: false } },
      );

      // 3D surface
      view.create(
        'functiongraph3d',
        [
          (x: number, y: number) => zScale * graphFunction(x, y),
          xyBound,
          xyBound,
        ],
        {
          strokeWidth: 0.5,
          stepsU: 70,
          stepsV: 70,
        },
      );

      // 3D points:
      // Point on xy plane
      const pointXY = view.create('point3d', [7, 3, 0], {
        name: `(${xLabel}, ${yLabel})`,
      });

      // Project pointXY to the surface
      const pointSurface = view.create(
        'point3d',
        [
          () => [
            pointXY.X(),
            pointXY.Y(),
            zScale * graphFunction(pointXY.X(), pointXY.Y()),
          ],
        ],
        { name: zLabel },
      );

      view.create('line3d', [pointXY, pointSurface], { dash: 1 });
    }

    connectedCallback() {
      this.initId();
      this.initClassName();
      this.initGraph(this.id);
    }

    disconnectedCallback() {
      if (!this.board) return;

      JXG.JSXGraph.freeBoard(this.board);
    }
  };

  // customElements.define(tagName, Klass);
  customElements.define(tagName, Klass, { extends: 'div' });
}
