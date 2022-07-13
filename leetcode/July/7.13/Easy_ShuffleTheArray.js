/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(nums[i]);
    array.push(nums[i + n]);
  }
  return array;
};
