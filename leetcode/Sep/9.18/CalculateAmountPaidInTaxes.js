/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let temp = 0;
  let answer = 0;
  for (let i = 0; i < brackets.length; i++) {
    const [upper, percent] = brackets[i];
    if (upper > income) {
      answer += ((income - temp) / 100) * percent;
      temp = income;
    } else {
      answer += ((upper - temp) / 100) * percent;
      temp = upper;
    }
  }
  return answer;
};
