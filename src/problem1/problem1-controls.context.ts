import { reactive } from 'vue';

export const controlsContext = reactive({
  cathodeVoltage: 7,
  anodeVoltage: 3,
  cylinderVoltage: 0,
  showAnodeFieldLines: false,
  showBlueStuff: false,
});
