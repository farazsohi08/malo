<template>
  <div class="flex h-full w-full flex-col items-center">
    <Tex />
    <Controls />
    <Diagram />
    <Graph
      :graph-function="equations.maximumDeflection"
      x-label="V&#x209a;"
      y-label="V&#x2090;"
      z-label="Maximum Deflection"
      :z-scale="0.00003"
    />
  </div>
</template>

<script setup lang="ts">
import * as equations from './problem2-equations.ts';
import Graph from '@/graph.vue';
import Controls from './problem2-controls.vue';
import Diagram from './problem2-diagram.vue';
import Tex from './problem2-tex.vue';
</script>
