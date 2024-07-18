function sumArray(arr) {
  return Array.isArray(arr) ? arr.reduce((a, b) => a + b, 0) : 0;
}

module.exports = sumArray;
