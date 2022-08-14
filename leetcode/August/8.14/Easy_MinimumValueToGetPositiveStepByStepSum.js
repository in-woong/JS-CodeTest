/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let startValue = 0;
  let answer;
  while (true) {
    startValue++;

    let sum = startValue;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum <= 0) break;
    }
    if (sum > 0) break;
  }
  return startValue;
};
