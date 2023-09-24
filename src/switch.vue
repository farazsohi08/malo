<template>
  <label class="relative inline-block h-8 w-16">
    <input type="checkbox" class="peer h-0 w-0 opacity-0" />
    <span
      class="absolute bottom-0 left-0 right-0 top-0 h-8 w-16 cursor-pointer bg-stone-300 duration-500 before:absolute before:bottom-1 before:left-1 before:h-6 before:w-6 before:bg-white before:duration-500 peer-checked:bg-sky-500 peer-checked:before:translate-x-8 peer-focus:shadow-[0_0_theme(spacing.1)_theme(colors.sky.500)]"
      :class="{ 'rounded-full before:rounded-full': rounded }"
    ></span>
  </label>
</template>

<script setup lang="ts">
// import { computed, onMounted, ref } from 'vue';

defineProps({
  rounded: {
    type: Boolean,
    default: false,
  },
});
</script>
