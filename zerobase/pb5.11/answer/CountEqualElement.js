function solution(nums) {
  let result = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        result++;
      }
    }
  }
  return result;
}
const input = [
  [2, 5, 6, 3, 2, 6, 6],
  [8, 5, 10, 10, 10, 6, 10, 9, 5, 6],
  [100],
  [],
  [100, 100, 100],
  [7, 8, 5, 10, 6, 5, 10, 7, 9, 5],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
