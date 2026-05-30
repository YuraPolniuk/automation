export const cos = (angle) => Math.cos(angle);
export const tan = (angle) => Math.tan(angle);
export const asin = (value) => {
  if (value < -1 || value > 1) {
    throw new Error("Value must be between -1 and 1");
  }
  return Math.asin(value);
};