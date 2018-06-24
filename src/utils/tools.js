export const isValidPositiveInteger = value => {
  return value > 0 && Number.isInteger(Number.parseInt(value, 10));
};
