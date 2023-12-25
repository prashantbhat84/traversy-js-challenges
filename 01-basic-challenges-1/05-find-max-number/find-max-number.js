function findMaxNumber(numarray) {
  let maxNumber = 0;
  if (!Array.isArray(numarray) || numarray.length === 0) {
    return maxNumber;
  }
  maxNumber = numarray.reduce((a, b) => {
    return a > b ? a : b;
  });
  return maxNumber;
}

module.exports = findMaxNumber;
