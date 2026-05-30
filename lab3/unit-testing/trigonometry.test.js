import { cos, tan, asin } from './trigonometry.js';

describe('Функція cos', () => {
  test('cos(0) має бути 1', () => {
    expect(cos(0)).toBe(1);
  });

  test('cos(Math.PI) має бути -1', () => {
    expect(cos(Math.PI)).toBe(-1);
  });

  test('cos(Math.PI / 2) має бути близько 0', () => {
    expect(cos(Math.PI / 2)).toBeCloseTo(0);
  });

  test('cos() без аргументів повертає NaN', () => {
    expect(cos()).toBeNaN();
  });

  test('cos(-Math.PI) має бути -1', () => {
    expect(cos(-Math.PI)).toBe(-1);
  });
});

describe('Функція tan', () => {
  test('tan(0) має бути 0', () => {
    expect(tan(0)).toBe(0);
  });

  test('tan(Math.PI / 4) має бути близько 1', () => {
    expect(tan(Math.PI / 4)).toBeCloseTo(1);
  });

  test('tan(-Math.PI / 4) має бути близько -1', () => {
    expect(tan(-Math.PI / 4)).toBeCloseTo(-1);
  });

  test('tan(Math.PI) має бути близько 0', () => {
    expect(tan(Math.PI)).toBeCloseTo(0);
  });

  test('tan() без аргументів повертає NaN', () => {
    expect(tan()).toBeNaN();
  });
});

describe('Функція asin', () => {
  test('asin(0) має бути 0', () => {
    expect(asin(0)).toBe(0);
  });

  test('asin(1) має бути Math.PI / 2', () => {
    expect(asin(1)).toBe(Math.PI / 2);
  });

  test('asin(-1) має бути -Math.PI / 2', () => {
    expect(asin(-1)).toBe(-Math.PI / 2);
  });

  test('asin(0.5) має бути близько Math.PI / 6', () => {
    expect(asin(0.5)).toBeCloseTo(Math.PI / 6);
  });

  test('asin(2) має кидати помилку', () => {
    // Для toThrow передаємо колбек (функцію), а не просто виклик
    expect(() => asin(2)).toThrow("Value must be between -1 and 1");
  });
});