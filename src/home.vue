<template>
  <div class="min-w-[850px]">
    <div
      class="math-container w-full bg-white text-gray-600 p-8"
      v-html="mml"
    ></div>
    <div class="bg-white">
      <!-- <img
        src="/electron-gun-with-wehnelt-cylinder.svg"
        alt="Electron Gun With Wehnelt Cylinder"
      /> -->
      <Diagram/>
    </div>
    <div class="jxgbox mx-auto aspect-square max-w-[50rem]" id="jxgbox"></div>
  </div>
</template>

<script setup lang="ts">
import Diagram from './diagram.vue';
const mml = import.meta.compileTime('assets/tex/index.ts');
</script>
