<!-- eslint-disable vue/no-v-html -- Compile time generated trusted MathML-->
<template>
  <div class="math-container w-full bg-white p-8 text-gray-600" v-html="mml" />
</template>

<script setup lang="ts">
const mml = import.meta.compileTime<string>('../assets/tex/problem1.ts');
</script>

<style src="@/assets/styles/main.css"></style>
