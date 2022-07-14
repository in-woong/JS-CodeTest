/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  const array = [];
  for (let i = 0; i < nums.length; i++) {
    let n = i;
    let element = nums[n];
    let count = 1;
    while (element < nums[n + 1]) {
      n++;
      count++;
      element = nums[n];
    }
    array.push(count);
  }

  return Math.max(...array);
};
