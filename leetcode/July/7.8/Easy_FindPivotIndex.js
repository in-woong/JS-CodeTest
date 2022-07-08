var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((acc, cur) => acc + cur, 0) - nums[0];
  if (leftSum == rightSum) return 0;
  for (let i = 1; i < nums.length; i++) {
    leftSum += nums[i - 1];
    rightSum -= nums[i];

    if (leftSum === rightSum) return i;
  }
  return -1;
};
