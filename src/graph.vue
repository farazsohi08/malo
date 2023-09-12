<template>
  <div :id="containerId" class="jxgbox mx-auto aspect-square max-w-[50rem]" />
</template>

<script setup lang="ts">
import JXG from 'jsxgraph';
import { uniqueId } from 'lodash-es';
import { onMounted } from 'vue';
import { beamIntensity } from './equations';

const containerId = `jxgbox-${uniqueId()}`;
// const graphFunction = (x: number, y: number) => 0.15 * x * y + 2;
onMounted(() => {
  const board = JXG.JSXGraph.initBoard(containerId, {
    renderer: 'svg',
    boundingbox: [-8, 8, 8, -8],
    keepaspectratio: false,
    axis: false,
  });

  const box = [0, 10];
  const view = board.create(
    'view3d',
    [
      [-5, -5],
      [10, 10],
      [box, box, box],
    ],
    { xPlaneRear: { visible: true }, yPlaneRear: { visible: true } },
  );

  // 3D surface
  view.create(
    'functiongraph3d',
    [
      beamIntensity,
      box, // () => [-s.Value()*5, s.Value() * 5],
      box, // () => [-s.Value()*5, s.Value() * 5],
    ],
    { strokeWidth: 0.5, stepsU: 70, stepsV: 70 },
  );

  // 3D points:
  // Point on xy plane
  const pointXY = view.create('point3d', [7, 3,0], { name: '(U\u2095, U\u2090)',  });

  // pointXY.on('move', (() => pointXY.setPosition([pointXY.X(), pointXY.Y(), 0])))

  // Project Axy to the surface
  const pointSurface = view.create(
    'point3d',
    [() => [pointXY.X(), pointXY.Y(), beamIntensity(pointXY.X(), pointXY.Y())]],
    { name: 'Beam Intensity' },
  );

  view.create('line3d', [pointXY, pointSurface], { dash: 1 });
  // (view.az_slide as Slider).setValue(0);
  // (view.el_slide as Slider).setValue(0);
  // board.update();
});
</script>

<style scoped></style>
