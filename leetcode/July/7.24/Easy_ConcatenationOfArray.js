/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  const ans = [];
  let s = 0;
  let maxSize = nums.length * 2;
  while (ans.length < maxSize) {
    if (s === nums.length) {
      s = 0;
    }

    ans.push(nums[s]);
    s++;
  }

  return ans;
};
