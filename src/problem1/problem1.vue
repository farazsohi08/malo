<template>
  <div class="flex h-full w-full flex-col items-center">
    <Tex />
    <Controls v-model="controls" />
    <Diagram v-bind="controls" />
    <Graph
      class="w-full"
      :graph-function="(x, y) => 3 * equations.beamIntensity(x, y)"
    />
  </div>
</template>

<script setup lang="ts">
import * as equations from '@/equations';
import Graph from '@/graph.vue';
import { reactive } from 'vue';
import Controls from './problem1-controls.vue';
import type { Controls as IControls } from './problem1-controls.interface.vue';
import Diagram from './problem1-diagram.vue';
import Tex from './problem1-tex.vue';

const controls: IControls = reactive({
  cathodeVoltage: 7,
  anodeVoltage: 3,
  cylinderVoltage: 0,
  showAnodeFieldLines: false,
  showBlueStuff: false,
});
</script>
