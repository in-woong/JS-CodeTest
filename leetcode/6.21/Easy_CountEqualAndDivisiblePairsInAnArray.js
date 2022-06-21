function solution(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j] && (i * j) % k == 0) {
        count++;
      }
    }
  }
  return count;
}

const input = [
  [[3, 1, 2, 2, 2, 1, 3], 2],
  [[1, 2, 3, 4], 1],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
