/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (S) {
  let result = [],
    min = 0,
    max = S.length;

  for (i in S) {
    if (S[i] === 'I') {
      result.push(min);
      min += 1;
    } else {
      result.push(max);
      max -= 1;
    }
  }
  if (S[S.length - 1] === 'I') {
    result.push(min);
  } else {
    result.push(max);
  }
  return result;
};
