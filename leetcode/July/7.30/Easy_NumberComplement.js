/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const array = num.toString(2).split('');
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == '1') answer.push('0');
    if (array[i] == '0') answer.push('1');
  }
  return parseInt(answer.join(''), 2);
};
