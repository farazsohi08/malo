<template>
  <div
    class="flex flex-col items-center gap-8"
  >
    <label class="w-72">
      <div class="flex justify-between">
        <div>Cathode Voltage (V<sub>h</sub>)</div>
        <div class="flex w-20 justify-between">
          <div class="px-2">=</div>
          <div>{{ controls.cathodeVoltage.toFixed(2) }}V</div>
        </div>
      </div>
      <input
        v-model.number="controls.cathodeVoltage"
        class="w-72"
        min="0.0"
        max="10.0"
        type="range"
        step="0.01"
      />
    </label>
    <label class="w-72">
      <div class="flex justify-between">
        <div>Anode Voltage (V<sub>a</sub>)</div>
        <div class="flex w-20 justify-between">
          <div class="px-2">=</div>
          <div>{{ controls.anodeVoltage.toFixed(2) }}KV</div>
        </div>
      </div>
      <input
        v-model.number="controls.anodeVoltage"
        class="w-72"
        min="0.0"
        max="10.0"
        type="range"
        step="0.01"
      />
    </label>
    <label class="w-72">
      <div class="flex justify-between">
        <div>Deflector Plate Voltage (V<sub>p</sub>)</div>
        <div class="flex w-20 justify-between">
          <div class="px-2">=</div>
          <div>{{ controls.plateVoltage.toFixed(2) }}KV</div>
        </div>
      </div>
      <input
        v-model.number="controls.plateVoltage"
        class="w-72"
        min="-1.0"
        max="1.0"
        type="range"
        step="0.01"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import Switch from '@/switch.vue';
import { controlsContext as controls } from './problem2-controls.context.ts';
</script>
<style scoped></style>
