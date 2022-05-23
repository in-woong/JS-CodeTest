function solution(nums, n) {
  return nums.indexOf(n);
}

const input = [[[1, 3, 5, 3, 2], 3]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0],input[i][1])}`);
}
