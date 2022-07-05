var numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) return 0;
  let count = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    const diff = nums[i] - nums[i - 1];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] - nums[j - 1] == diff) count++;
      else break;
    }
  }
  return count;
};
