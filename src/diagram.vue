<template>
  <div class="flex flex-col items-center">
    <label class="w-72">
      <div class="flex justify-between">
        <div>Cathode Voltage (U<sub>h</sub>)</div>
        <div class="flex w-20 justify-between">
          <div class="px-2">=</div>
          <div>{{ cathodeVoltage.toFixed(2) }}V</div>
        </div>
      </div>
      <input
        v-model.number="cathodeVoltage"
        class="w-72"
        min="0.0"
        max="10.0"
        type="range"
        step="0.01"
      />
    </label>
    <Switch rounded></Switch>
    <label class="w-72">
      <div class="flex justify-between">
        <div>Anode Voltage (U<sub>a</sub>)</div>
        <div class="flex w-20 justify-between">
          <div class="px-2">=</div>
          <div>{{ anodeVoltage.toFixed(2) }}KV</div>
        </div>
      </div>
      <input
        class="w-72"
        v-model.number="anodeVoltage"
        min="0.0"
        max="10.0"
        type="range"
        step="0.01"
      />
    </label>
    <label class="w-72">
      <div class="flex justify-between">
        <div>Cylinder Voltage (U<sub>w</sub>)</div>
        <div class="flex w-20 justify-between">
          <div class="px-2">=</div>
          <div>{{ cylinderVoltage.toFixed(2) }}KV</div>
        </div>
      </div>
      <input
        class="w-72"
        v-model.number="cylinderVoltage"
        min="0.0"
        max="10.0"
        type="range"
        step="0.01"
      />
    </label>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      width="850"
      height="550"
    >
      <path
        fill="none"
        stroke="#000"
        stroke-dasharray="4,4"
        d="M710 250h-10v60h10v-60zM530 250h-10v60h10v-60z"
      />
      <path
        class="beam fill-lime-500"
        :d="`M507,275 v10 ${beamSpreadPath}z`"
        stroke="0"
        :fill-opacity="beamIntensity"
      />
      <path
        class="coil"
        fill="none"
        stroke="#F60"
        :stroke-width="0.7 + cathodeDependence"
        d="M500 310c2.121 0 5.438-2.298 5-5s-8.399-7.221-10-5c-1.601 2.222 2.879 5 5 5s5.438-2.298 5-5-8.399-7.221-10-5c-1.601 2.222 2.879 5 5 5s5.438-2.298 5-5-8.399-7.221-10-5c-1.601 2.222 2.879 5 5 5s5.438-2.298 5-5-8.399-7.221-10-5c-1.601 2.222 2.879 5 5 5s5.438-2.298 5-5-8.399-7.221-10-5c-1.601 2.222 2.879 5 5 5s5.438-2.298 5-5-8.399-7.221-10-5c-1.601 2.222 2.879 5 5 5s5.438-2.298 5-5-8.399-7.221-10-5c-1.601 2.222 2.879 5 5 5s5.438-2.298 5-5-8.399-7.221-10-5c-1.601 2.222 2.879 5 5 5s5.438-2.298 5-5-8.399-7.221-10-5c-1.601 2.222 2.879 5 5 5s5.438-2.298 5-5-8.399-7.221-10-5c-1.601 2.222 2.879 5 5 5s5-2.878 5-5c0-2.121-5-5-5-5"
      />
      <path
        fill="teal"
        stroke="#000"
        d="M350 350h170v-50h10v60H350v-10zM350 210h170v50h10v-60H350v10z"
      />
      <path
        class="screen"
        fill="green"
        stroke="#000"
        d="M700 260h10V100h-10v160zM700 460h10V300h-10v160z"
      />
      <path
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-width="2"
        d="M500 250h-30c-10 0-20 10-30 10h-20M500 310h-20c-10 0-20-10-30-10H150V190h70v70h200"
      />
      <path
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="bevel"
        stroke-width="3"
        d="M175 245c0 13.808-11.193 25-25 25s-25-11.192-25-25c0-13.807 11.193-25 25-25s25 11.193 25 25zM375 120c0 13.808-11.192 25-25 25s-25-11.192-25-25c0-13.807 11.192-25 25-25s25 11.193 25 25z"
        opacity=".778"
      />
      <path
        fill="none"
        stroke="#000"
        stroke-width="2"
        d="M280 300V120h140v80"
      />
      <path
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="bevel"
        stroke-width="3"
        d="M500 425c0 13.809-11.192 25-25 25s-25-11.191-25-25c0-13.807 11.192-25 25-25s25 11.193 25 25z"
        opacity=".778"
      />
      <path fill="none" stroke="#000" stroke-width="2" d="M280 300v125h420" />
      <path
        d="M285 300a5 5 0 1 1-10 0 5 5 0 0 1 10 0zM425 200c0 2.762-2.238 5-5 5a5 5 0 1 1 0-10 5 5 0 0 1 5 5zM705 425c0 2.763-2.238 5-5 5s-5-2.237-5-5a5 5 0 1 1 10 0z"
      />
      <g class="field-lines" stroke-width=".4">
        <g class="anode-field-lines fill-green-500 stroke-green-500">
          <path
            d="M689.875 229.513c-60.003 15-77.398 20-149.875 20v1c72.523 0 90.128-5.03 150.125-20.03l-.25-.97z"
          />
          <path
            d="M689.875 254.513c-59.965 14.99-107.398 20-179.875 20v1c72.523 0 120.09-5.021 180.125-20.03l-.25-.97z"
          />
          <path d="m514 275 2-2-7 2 7 2-2-2z" />
          <path
            d="M510 284.513v1c72.477 0 119.91 4.979 179.875 19.97l.25-.97c-60.035-15.01-107.602-20-180.125-20z"
          />
          <path d="m514 285 2-2-7 2 7 2-2-2zM544 250l2-2-7 2 7 2-2-2z" />
          <path
            d="M540 309.513v1c72.477 0 89.872 4.97 149.875 19.97l.25-.97c-59.997-15-77.602-20-150.125-20z"
          />
          <path d="m544 310 2-2-7 2 7 2-2-2z" />
          <path
            d="M540 334.513v1c72.477 0 89.872 4.97 149.875 19.97l.25-.97c-59.997-15-77.602-20-150.125-20z"
          />
          <path d="m544 335 2-2-7 2 7 2-2-2z" />
          <path
            d="M689.875 204.513c-60.003 15-77.398 20-149.875 20v1c72.523 0 90.128-5.03 150.125-20.03l-.25-.97z"
          />
          <path d="m544 225 2-2-7 2 7 2-2-2z" />
        </g>
        <g class="cylinder-field-lines fill-yellow-500 stroke-yellow-500">
          <path d="M507.5 257.013v1h10v-1h-10z" />
          <path d="m513.5 257.5-2 2 7-2-7-2 2 2z" />
          <path
            d="M524.656 262.138c-2.472 2.472-4.251 3.649-6.656 4.25-2.405.603-5.5.625-10.5.625v1c5 0 8.155-.007 10.75-.655s4.564-1.971 7.094-4.5l-.688-.72z"
          />
          <path d="M522.172 265.329v2.828l3.535-6.364-6.364 3.536h2.829z" />
          <path d="M507.5 302.013v1h10v-1h-10z" />
          <path d="m513.5 302.5-2 2 7-2-7-2 2 2z" />
          <path
            d="M507.5 292.013v1c5 0 8.095-.007 10.5.595s4.186 1.779 6.656 4.25l.688-.72c-2.528-2.528-4.499-3.851-7.094-4.5-2.595-.65-5.75-.625-10.75-.625z"
          />
          <path d="M522.172 294.672h-2.829l6.364 3.535-3.535-6.363v2.828z" />
        </g>
      </g>
      <path
        fill="none"
        stroke="#00F"
        stroke-linecap="round"
        stroke-linejoin="bevel"
        stroke-width="2.143"
        d="M627.043 279.733c0 3.969-3.089 7.187-6.897 7.187-3.812 0-6.899-3.218-6.899-7.187 0-3.971 3.089-7.188 6.899-7.188 3.808 0 6.897 3.219 6.897 7.188z"
      />
      <path fill="#00F" d="M624.378 279.144h-8.467v1.177h8.467v-1.177" />
      <g fill="#00F">
        <path d="M635 279.263v1.5h35v-1.5h-35z" />
        <path
          stroke="#00F"
          stroke-width=".6"
          d="m664 280-3 3 10.5-3-10.5-3 3 3z"
        />
      </g>
      <path fill="none" stroke="#00F" d="M650 250h14l-5-5" />
      <path
        fill="none"
        stroke="#000"
        d="m455 235 35 25M510 135l-20 60M712 120h40"
      />
      <path
        fill="none"
        stroke="gray"
        stroke-width="2"
        d="M592.5 167.5h29L614 160"
      />
      <g class="text" font-family="serif" transform="translate(0, 1)">
        <text font-size="56" transform="translate(320 60)">U</text>
        <text font-size="48" transform="translate(445 520)">U</text>
        <text font-size="56" transform="translate(45 260)">U</text>
        <text font-size="36" transform="translate(82.5 270)">H</text>
        <text font-size="36" transform="translate(360 70)">W</text>
        <text font-size="36" transform="translate(480 530)">A</text>
        <text fill="#00F" font-size="24" transform="translate(650 270)">V</text>
        <text fill="gray" font-size="56" transform="translate(590 210)">E</text>

        <g class="numbers" font-size="38">
          <text transform="translate(417.5 250)">1</text>
          <text transform="translate(500 130)">2</text>
          <text transform="translate(760 135)">3</text>
        </g>

        <text fill="gray" font-size="36" transform="translate(625 220)">A</text>
      </g>
      <path
        fill="none"
        stroke="#000"
        stroke-width="2"
        d="M325.544 92c13.555-13.556 35.188-14.051 49.333-1.488"
      />
      <path
        d="m364.469 92.77-.13-1.998 9.842-.63-1.347-9.77 1.984-.27L376.455 92z"
      />
      <path
        fill="none"
        stroke="#000"
        stroke-width="2"
        d="M497.956 454.725c-13.556 13.556-35.187 14.052-49.332 1.487"
      />
      <path
        d="m459.031 453.953.13 1.998-9.841.629 1.347 9.772-1.983.269-1.638-11.898z"
      />
      <path
        fill="none"
        stroke="#000"
        stroke-width="2"
        d="M125.508 220.557c-13.555 13.557-14.051 35.187-1.488 49.332"
      />
      <path
        d="m113.609 269.83.271-1.982 9.769 1.348.63-9.843 1.998.13-.77 11.986z"
      />
      <circle
        cx="770"
        cy="122"
        r="18"
        fill="none"
        stroke="#000"
        stroke-miterlimit="10"
        stroke-width="1.674"
      />
      <circle
        cx="427.609"
        cy="236.506"
        r="18"
        fill="none"
        stroke="#000"
        stroke-miterlimit="10"
        stroke-width="1.674"
      />
      <circle
        cx="510"
        cy="118"
        r="18"
        fill="none"
        stroke="#000"
        stroke-miterlimit="10"
        stroke-width="1.674"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import * as equations from './equations';
import Switch from './switch.vue';

const cathodeVoltage = ref(7);
const anodeVoltage = ref(3);
const cylinderVoltage = ref(0);
const cathodeDependence = computed(() =>
  equations.cathode(cathodeVoltage.value),
);
const beamSpreadPath = computed(() => {
  const spread = cylinderVoltage.value;
  return `l300, ${spread} v-${2 * spread + 10}`;
});
const anodeDependence = computed(() => equations.anode(anodeVoltage.value));
const anodeRelativeFieldStrength = computed(() => anodeVoltage.value / 10);
const cylinderRelativeFieldStrength = computed(
  () => cylinderVoltage.value / 10,
);
const beamIntensity = computed(
  () => cathodeDependence.value * anodeDependence.value,
);
</script>

<style scoped>
.coil {
  filter: drop-shadow(
    0 0 v-bind(cathodeDependence + 'px') theme('colors.amber.400')
  );
}

.anode-field-lines {
  stroke-width: v-bind(anodeRelativeFieldStrength);
  filter: drop-shadow(
    0 0 v-bind(2.5 * anodeRelativeFieldStrength + 'px')
      theme('colors.green.500' / v-bind(anodeRelativeFieldStrength))
  );
}

.cylinder-field-lines {
  stroke-width: v-bind(cylinderRelativeFieldStrength);
  filter: drop-shadow(
    0 0 v-bind(2.5 * cylinderRelativeFieldStrength + 'px')
      theme('colors.yellow.500' / v-bind(cylinderRelativeFieldStrength))
  );
}

.screen {
  filter: drop-shadow(
    v-bind(5 * beamIntensity + 'px') 0 v-bind(5 * beamIntensity + 'px')
      theme('colors.lime.500' / v-bind(beamIntensity))
  );
}

.beam {
  fill: linear-gradient(0 green 0.5 green 0.5 black 1 black);
}
</style>
