<template>
  <div :id="containerId" class="jxgbox mx-auto aspect-square max-w-[50rem]" />
</template>

<script setup lang="ts">
import JXG from 'jsxgraph';
import { uniqueId } from 'lodash-es';
import { onMounted } from 'vue';
import { beamIntensity } from './equations';

const containerId = `jxgbox-${uniqueId()}`;
// Function F to be plotted
const graphFunction = beamIntensity;
// const graphFunction = (x: number, y: number) => 0.15 * x * y + 2;
onMounted(() => {
  // // Define some colors. optimized for colorblinds
  // const colors = [
  //   JXG.palette.blue,
  //   JXG.palette.red,
  //   JXG.palette.green,
  //   JXG.palette.black,
  //   JXG.palette.purple,
  //   JXG.palette.yellow,
  //   JXG.palette.skyblue,
  // ];
  // let cnt = 0;

  const board = JXG.JSXGraph.initBoard(containerId, {
    boundingbox: [-8, 8, 8, -8],
    keepaspectratio: false,
    axis: false,
  });

  const box = [0, 10];
  const view = board.create(
    'view3d',
    [
      [-6, -3],
      [8, 8],
      [box, box, box],
    ],
    { xPlaneRear: { visible: true }, yPlaneRear: { visible: true } },
  );

  // 3D surface
  view.create(
    'functiongraph3d',
    [
      graphFunction,
      box, // () => [-s.Value()*5, s.Value() * 5],
      box, // () => [-s.Value()*5, s.Value() * 5],
    ],
    { strokeWidth: 0.5, stepsU: 70, stepsV: 70 },
  );

  // 3D points:
  // Point on xy plane
  const pointXY = view.create('point3d', [2, 2, 0], { withLabel: false });

  // Project Axy to the surface
  const pointSurface = view.create(
    'point3d',
    [() => [pointXY.X(), pointXY.Y(), graphFunction(pointXY.X(), pointXY.Y())]],
    { withLabel: false },
  );

  view.create('line3d', [pointXY, pointSurface], { dash: 1 });
});
</script>

<style scoped></style>
