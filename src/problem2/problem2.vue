<template>
  <div class="flex h-full w-full flex-col items-center">
    <Tex />
    <Controls />
    <Diagram />
    <Graph :graph-function="(x, y) => 3 * equations.beamIntensity(x, y)" />
  </div>
</template>

<script setup lang="ts">
import * as equations from './problem2-equations.ts';
import Graph from '@/graph.vue';
import Controls from './problem2-controls.vue';
import Diagram from './problem2-diagram.vue';
import Tex from './problem2-tex.vue';

// 2) Electron Gun with E-Field like in https://virtuelle-experimente.de/bilder/e-feld/experimental-setup-electron-deflection-tube.svg
// a) like 1)
// b) the red, blue and yellow part is added.
// c) U_W is 5kV and cannot be changed
// d) U_K can be varied between -1kV and 1kV
// d) the beam is just a line. It is strata until the yellow area
// d) in the yellow area it is a parabola of the form y=0.25*U_K/U_A*0.1*x^2
// e) behind the yellow area, it is a strait line again.

</script>
