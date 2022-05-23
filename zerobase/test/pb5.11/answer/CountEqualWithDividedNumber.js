function solution(nums, d) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && nums[i] % d === 0) {
        result++;
      }
    }
  }
  return result;
}
const input = [
  [[4, 1, 2, 1, 4], 2],
  [[6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6], 3],
  [[2], 2],
  [[], 3],
  [[10, 10], 10],
  [[10, 8, 6, 4, 2, 10, 8, 6, 4, 2], 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(...input[i])}`);
}
