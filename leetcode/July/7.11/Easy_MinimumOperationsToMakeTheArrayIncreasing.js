var minOperations = function (nums) {
  const temp = Array.from({ length: nums.length }, (_, idx) => nums[idx]);

  for (let i = 0; i < nums.length - 1; i++) {
    if (i == 0) {
      temp[i + 1] = nums[i] >= temp[i + 1] ? nums[i] + 1 : temp[i + 1];
    } else {
      temp[i + 1] = temp[i] >= temp[i + 1] ? temp[i] + 1 : temp[i + 1];
    }
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += temp[i] - nums[i];
  }

  return count;
};
