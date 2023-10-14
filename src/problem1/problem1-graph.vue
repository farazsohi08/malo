<template>
  <Graph
    :graph-function="equations.beamIntensity"
    x-label="U&#x2095;"
    y-label="U&#x2090;"
    z-label="Beam Intensity"
    :z-scale="3"
  />
</template>

<script setup lang="ts">
import * as equations from './problem1-equations.ts';
import Graph from '@/graph.vue';
</script>
