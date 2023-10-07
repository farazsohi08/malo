import { clamp } from 'remeda';

export function cathode(voltage: number): number {
  const v = clamp(voltage, { min: 0, max: 10 });
  if (v < 2.5) return 0;

  return (1 / 7.5 ** 2) * (v - 2.5) ** 2;
}

export function anode(voltage: number): number {
  const v = clamp(voltage, { min: 0, max: 10 });
  if (v < 1) return 0;
  if (v >= 3) return 1;

  return 0.5 * (v - 1);
}

export function beamField(voltage: number): number {
  return (2 / 100) * voltage ** 2;
}

export function beamIntensity(
  cathodeVoltage: number,
  anodeVoltage: number,
): number {
  return cathode(cathodeVoltage) * anode(anodeVoltage);
}
