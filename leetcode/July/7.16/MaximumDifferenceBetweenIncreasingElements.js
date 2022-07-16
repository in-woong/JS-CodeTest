var maximumDifference = function (nums) {
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        max = max < nums[j] - nums[i] ? nums[j] - nums[i] : max;
      }
    }
  }
  return max;
};
