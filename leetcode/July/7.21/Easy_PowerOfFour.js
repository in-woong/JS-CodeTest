/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  let count = -1;
  for (let i = 0; i < 31; i++) {
    if (Math.pow(2, i) == n && i % 2 == 0) {
      count = i / 2;
    }
  }
  if (count !== -1) return true;
  else return false;
};

// Runtime: 75 ms, faster than 91.30% of JavaScript online submissions for Power of Four.
// Memory Usage: 42.6 MB, less than 88.12% of JavaScript online submissions for Power of Four.
