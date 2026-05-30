import { test, expect } from '@playwright/test';
import { isPrime } from '../../src/functions/isPrime.js';

test.describe('TDD: isPrime function', () => {
  test('кидає помилку, якщо передано не число', () => {
    expect(() => isPrime('рядок')).toThrow('Input must be a number');
  //2 fail test
  test('повертає false для чисел <= 1 та дробів', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(-5)).toBe(false);
    expect(isPrime(2.5)).toBe(false);
  });
  });
  //
});

