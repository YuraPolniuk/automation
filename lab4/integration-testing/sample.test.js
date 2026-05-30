import { add } from './sample.js';

describe('add', () => {
  test('складає два додатні числа', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('складає від\'ємне і додатнє', () => {
    expect(add(-1, 4)).toBe(3);
  });
});