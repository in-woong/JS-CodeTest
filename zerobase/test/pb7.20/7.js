function solution(nums, n) {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == n) return i;
  }
  return -1;
}
