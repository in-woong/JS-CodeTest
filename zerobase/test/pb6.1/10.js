function solution(nums, n) {
  nums.sort((a, b) => a - b);

  return nums.indexOf(n);
}

const input = [
  [[1, 3, 5, 3, 2], 3],
  [[2, 4, 2, 4, 2, 4, 4], 4],
  [[7, 7, 7, 6, 5, 10, 4, 4, 1, 8], 6],
  [[], 100],
  [[1, 3, 5, 3, 2], 99],
  [[1], 1],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
