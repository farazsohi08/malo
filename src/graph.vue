<template>
  <div :id="containerId" class="jxgbox w-full mx-auto aspect-square max-w-[50rem]" />
</template>

<script setup lang="ts">
import JXG from 'jsxgraph';
import { uniqueId } from 'lodash-es';
import { onMounted, type PropType } from 'vue';

const props = defineProps({
  graphFunction: {
    type: Function as PropType<(x: number, y: number) => number>,
    required: true,
  },
  xLabel: {type: String, default: 'x'},
  yLabel: {type: String, default: 'y'},
  zLabel: {type: String, default: 'z'},
  zScale: {type: Number, default: 1},
});

const containerId = `jxgbox-${uniqueId()}`;

onMounted(() => {
  const board = JXG.JSXGraph.initBoard(containerId, {
    renderer: 'svg',
    boundingbox: [-8, 8, 8, -8],
    keepaspectratio: false,
    axis: false,
  });

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
  view.create('functiongraph3d', [(x:number, y:number) =>  props.zScale * props.graphFunction(x, y), xyBound, xyBound], {
    strokeWidth: 0.5,
    stepsU: 70,
    stepsV: 70,
  });

  // 3D points:
  // Point on xy plane
  const pointXY = view.create('point3d', [7, 3, 0], {
    name: `(${props.xLabel}, ${props.yLabel})`,
  });

  // Project pointXY to the surface
  const pointSurface = view.create(
    'point3d',
    [() => [pointXY.X(), pointXY.Y(), props.zScale * props.graphFunction(pointXY.X(), pointXY.Y())]],
    { name: props.zLabel },
  );

  view.create('line3d', [pointXY, pointSurface], { dash: 1 });
});
</script>

<style scoped></style>
