function solution(nums) {
  let count = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else if (nums[i] == 0) {
      count = 0;
    }
    max = max < count ? count : max;
  }
  return max;
}

const input = [
  [1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 1],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
