<template>
  <div :id="containerId" class="jxgbox mx-auto aspect-square max-w-[50rem]" />
</template>

<script setup lang="ts">
import JXG from 'jsxgraph';
import { uniqueId } from 'lodash-es';
import { onMounted } from 'vue';
import { beamIntensity } from './equations';

const containerId = `jxgbox-${uniqueId()}`;
const graphFunction = (x: number, y: number) => 3 * beamIntensity(x, y);
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
  view.create(
    'functiongraph3d',
    [
    graphFunction,
      xyBound,
      xyBound,
    ],
    { strokeWidth: 0.5, stepsU: 70, stepsV: 70 },
  );

  // 3D points:
  // Point on xy plane
  const pointXY = view.create('point3d', [7, 3, 0], {
    name: '(U\u2095, U\u2090)',
  });

  // Project pointXY to the surface
  const pointSurface = view.create(
    'point3d',
    [() => [pointXY.X(), pointXY.Y(), graphFunction(pointXY.X(), pointXY.Y())]],
    { name: 'Beam Intensity' },
  );

  view.create('line3d', [pointXY, pointSurface], { dash: 1 });
});
</script>

<style scoped></style>
