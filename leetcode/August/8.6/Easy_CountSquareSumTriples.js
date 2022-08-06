/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  const answer = new Set();
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      for (let k = 1; k <= i; k++) {
        if (Math.pow(k, 2) + Math.pow(j, 2) == Math.pow(i, 2)) {
          answer.add([k, j, i]);
        }
      }
    }
  }
  return answer.size;
};
