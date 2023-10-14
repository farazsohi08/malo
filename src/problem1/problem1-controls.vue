<template>
  <div
    class="grid grid-cols-2 grid-rows-3 items-center justify-items-end gap-8"
  >
    <Switch
      v-model="controls.showAnodeFieldLines"
      label="Show Field Lines from Anode"
      rounded
    ></Switch>
    <label class="w-72">
      <div class="flex justify-between">
        <div>Cathode Voltage (U<sub>h</sub>)</div>
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
    <Switch
      v-model="controls.showBlueStuff"
      label="Show Electron"
      rounded
    ></Switch>
    <label class="w-72">
      <div class="flex justify-between">
        <div>Anode Voltage (U<sub>a</sub>)</div>
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
    <div></div>
    <label class="w-72">
      <div class="flex justify-between">
        <div>Cylinder Voltage (U<sub>w</sub>)</div>
        <div class="flex w-20 justify-between">
          <div class="px-2">=</div>
          <div>{{ controls.cylinderVoltage.toFixed(2) }}V</div>
        </div>
      </div>
      <input
        v-model.number="controls.cylinderVoltage"
        class="w-72"
        min="0.0"
        max="250.0"
        type="range"
        step="0.01"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import Switch from '@/switch.vue';
import {controlsContext as controls} from './problem1-controls.context.ts';
</script>

<style src="@/assets/styles/main.css"></style>

