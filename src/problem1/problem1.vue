<template>
  <div class="flex h-full w-full flex-col items-center">
    <Tex />
    <Controls />
    <Diagram />
    <Graph :graph-function="(x, y) => 3 * equations.beamIntensity(x, y)" />
  </div>
</template>

<script setup lang="ts">
import * as equations from './problem1-equations.ts';
import Graph from '@/graph.vue';
import Controls from './problem1-controls.vue';
import Diagram from './problem1-diagram.vue';
import Tex from './problem1-tex.vue';
</script>
