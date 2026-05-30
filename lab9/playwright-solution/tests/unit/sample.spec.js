import { test, expect } from '@playwright/test';
import { cos, tan, asin } from '../../src/functions/sample.js';

test.describe('Unit Tests 🧩', () => {
  test('cos(0) має бути 1', () => {
    expect(cos(0)).toBe(1);
  });
  
  test('tan(0) має бути 0', () => {
    expect(tan(0)).toBe(0);
  });

  test('asin(1) має бути Math.PI / 2', () => {
    expect(asin(1)).toBe(Math.PI / 2);
  });

  test('asin(2) має кидати помилку', () => {
    expect(() => asin(2)).toThrow("Value must be between -1 and 1");
  });
});