/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  const odd = [];
  const even = [];
  nums.forEach((num) => {
    if (num % 2) odd.push(num);
    else even.push(num);
  });
  const n = nums.length / 2;
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(even[i]);
    answer.push(odd[i]);
  }
  return answer;
};
