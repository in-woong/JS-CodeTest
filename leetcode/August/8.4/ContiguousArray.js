/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const answer = [];
  for (let start = 0; start < nums.length; start++) {
    let temp = nums[start] == 0 ? -1 : 1;
    for (let end = start + 1; end < nums.length; end++) {
      if (nums[end] == 0) {
        temp--;
      } else {
        temp++;
      }

      if (temp == 0) {
        answer.push(end - start + 1);
      }
    }
  }
  console.log(answer);
  if (answer.length == 0) return 0;
  return Math.max(...answer);
};
