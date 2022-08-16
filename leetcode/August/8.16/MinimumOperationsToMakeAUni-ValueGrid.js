/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  const array = [];

  grid.forEach((item) => array.push(...item));
  const n = array.length;
  array.sort((a, b) => a - b);
  let mid = array[Math.ceil(n / 2) - 1];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const diff = Math.abs(mid - array[i]);
    if (diff % x) return -1;
    sum += diff / x;
  }
  return sum;
};
