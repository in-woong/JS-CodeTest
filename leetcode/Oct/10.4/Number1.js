/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const array = n.toString(2).split('');
  let answer = 0;
  for (const el of array) {
    if (el == 1) {
      answer++;
    }
  }
  return answer;
};
