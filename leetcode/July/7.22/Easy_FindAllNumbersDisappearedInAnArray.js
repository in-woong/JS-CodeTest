/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const answer = [];
  const n = nums.length;
  for (let i = 1; i <= n; i++) {
    if (!nums.includes(i)) answer.push(i);
  }
  return answer;
};
"Ball".toLowerCase