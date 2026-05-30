import { cos, tan, asin } from '../../core/helpers.js';

describe('Unit Tests 🧩', () => {
  test('cos(0) має бути 1', () => expect(cos(0)).toBe(1));
  test('cos(Math.PI) має бути -1', () => expect(cos(Math.PI)).toBe(-1));
  test('tan(0) має бути 0', () => expect(tan(0)).toBe(0));
  test('tan(Math.PI / 4) має бути близько 1', () => expect(tan(Math.PI / 4)).toBeCloseTo(1));
  test('asin(0) має бути 0', () => expect(asin(0)).toBe(0));
});