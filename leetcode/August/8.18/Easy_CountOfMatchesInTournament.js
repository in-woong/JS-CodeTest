/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let sum = 0;
  while (n !== 1) {
    if (n % 2) {
      //odd
      const matches = (n - 1) / 2;
      sum += matches;
      n = matches + 1;
    } else {
      //even
      const matches = n / 2;
      sum += matches;
      n = matches;
    }
  }
  return sum;
};
