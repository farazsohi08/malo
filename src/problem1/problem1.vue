<template>
  <div class="flex h-full w-full flex-col items-center">
    <Tex />
    <Controls />
    <Diagram />
    <Graph
      :graph-function="equations.beamIntensity"
      x-label="U&#x2095;"
      y-label="U&#x2090;"
      z-label="Beam Intensity"
      :z-scale="3"
    />
  </div>
</template>

<script setup lang="ts">
import * as equations from './problem1-equations.ts';
import Graph from '@/graph.vue';
import Controls from './problem1-controls.vue';
import Diagram from './problem1-diagram.vue';
import Tex from './problem1-tex.vue';
</script>
