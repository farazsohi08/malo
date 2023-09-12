<!-- eslint-disable vue/no-v-html -- Compile time generated trusted MathML-->
<template>
  <div class="math-container w-full bg-white p-8 text-gray-600" v-html="mml" />
</template>

<script setup lang="ts">
const mml = import.meta.compileTime('assets/tex/index.ts');
</script>
