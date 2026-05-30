import { test, expect } from '@playwright/test';
import { isPrime } from '../../src/functions/isPrime.js';

test.describe('TDD: isPrime function', () => {
  test('кидає помилку, якщо передано не число', () => {
    expect(() => isPrime('рядок')).toThrow('Input must be a number');
  });
});