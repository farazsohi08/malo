import { clamp } from 'remeda';

export function coil(coilVoltage: number): number {
  const v = clamp(coilVoltage, { min: 0, max: 10 });
  if (v < 2.5) return 0;

  return (1 / 7.5 ** 2) * (v - 2.5) ** 2;
}

export function screen(screenVoltage: number): number {
  const v = clamp(screenVoltage, { min: 0, max: 10 });
  if (v < 1) return 0;
  if (v >= 3) return 1;

  return 0.5 * v - 1;
}

export function beamIntensity(
  coilVoltage: number,
  screenVoltage: number,
): number {
  return coil(coilVoltage) * screen(screenVoltage);
}
