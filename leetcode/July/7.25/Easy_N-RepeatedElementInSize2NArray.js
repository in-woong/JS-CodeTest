/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const array = [];
  let answer = -1;
  for (let i = 0; i < nums.length; i++) {
    if (array.includes(nums[i])) {
      answer = nums[i];
    } else {
      array.push(nums[i]);
    }
  }
  console.log(answer);
  return answer;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const obj = {};
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (obj[nums[i]] == -1) return nums[i];
    obj[nums[i]] = -1;
  }
};
