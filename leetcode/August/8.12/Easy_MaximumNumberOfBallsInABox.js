/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const map = new Map();
  for (let i = lowLimit; i <= highLimit; i++) {
    const n = count(i);

    if (map.get(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  return Math.max(...Array.from(map.values()));
};
function count(number) {
  number = String(number);
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  return sum;
}
