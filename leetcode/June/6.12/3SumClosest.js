function solution(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let sum = Number.MAX_SAFE_INTEGER;
  let temp = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      temp = nums[i] + nums[left] + nums[right];
      if (target > temp) {
        left++;
      } else if (target < temp) {
        right--;
      } else {
        return temp;
      }
      sum = Math.abs(target - temp) < Math.abs(target - sum) ? temp : sum;
    }
  }
  return sum;
}

const input = [
  [[-1, 2, 1, -4], 1],
  [[0, 0, 0], 1],
  [
    [
      0, -16, -11, -4, 6, 20, -17, 10, 14, -11, -16, 17, -14, -11, 8, -4, 0, -2,
      10, 15, 0, -2, -3, 19, 17, -18, 8, -16, -4, -16, -20, 16, -16, 5, -3, -18,
      -12, -18, -9, 11, 3, -14, -18, 8, 11, -9, -1, 6, 1, -17, -9, -7, 11, -10,
      18, -1, 4, -8, 1, -20, -19, -19, 12, 13, 14, 15, 0, 18, 3, 8, -4, 18, -1,
      6, -19, -11, 11, 14, 12, 11, -15, 2, 4, -1, 5, 3, -17, 15, -1, -15, 3, 16,
      -11, -14, 14, 4, -7, -20, -2, -14, -8, -12, -12, 18, 4, -12, 16,
    ],
    -31,
  ],
  [[1, 1, 1, 0], -100],
  [[1, 2, 5, 10, 11], 12],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
