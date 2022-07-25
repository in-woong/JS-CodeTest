/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] = obj[nums[i]] - 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] > 0) return nums[i];
  }
  return 1;
};
