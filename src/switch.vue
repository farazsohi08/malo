<template>
  <label class="switch relative inline-block h-8 w-16">
    <input type="checkbox" class="peer h-0 w-0 opacity-0" />
    <span
      class="slider absolute bottom-0 left-0 right-0 top-0 h-8 w-16 cursor-pointer bg-stone-300 duration-500 before:absolute before:bottom-1 before:left-1 before:h-6 before:w-6 before:bg-white before:duration-500 peer-checked:bg-sky-500 peer-checked:before:translate-x-8 peer-focus:shadow peer-focus:shadow-sky-500"
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

<style scoped>
/* The switch - the box around the slider */
/* .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
} */

/* Hide default HTML checkbox */
/* .switch input {
  opacity: 0;
  width: 0;
  height: 0;
} */

/* The slider */
/* .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
} */

/* .slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
} */

/* input:checked + .slider {
  background-color: #2196f3;
} */

/* input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
} */

/* input:checked + .slider:before {
  transform: translateX(26px);
} */

/* Rounded sliders */
/* .slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
} */
</style>
