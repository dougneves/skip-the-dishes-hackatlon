//For now, only see if it's a valid number
export const validadeLatLonValue = value => {
  console.log('validando ' + value);
  if (isNumber(value)) {
    return true;
  } else {
    return false;
  }
};

function isNumber(n) {
  return !Number.isNaN(Number.parseFloat(n));
}
