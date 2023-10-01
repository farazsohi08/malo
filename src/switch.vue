<template>
  <label class="group leading-8">
    <span v-if="label">{{ label }}</span>
    <div class="relative ms-2 inline-block h-8 w-16">
      <input
        type="checkbox"
        class="peer h-0 w-0 opacity-0"
        :checked="modelValue"
        @change="
          emit('update:modelValue', ($event.target as HTMLInputElement).checked)
        "
      />
      <span
        class="absolute bottom-0 left-0 right-0 top-0 h-8 w-16 cursor-pointer bg-stone-300 duration-500 before:absolute before:bottom-1 before:left-1 before:h-6 before:w-6 before:bg-white before:duration-500 group-focus-within:shadow-[0_0_theme(spacing.1)_theme(colors.teal.700)] peer-checked:bg-teal-700 peer-checked:before:translate-x-8"
        :class="{ 'rounded-full before:rounded-full': rounded }"
      ></span>
    </div>
  </label>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits({
  'update:modelValue': (value: unknown) => typeof value === 'boolean',
});
</script>
