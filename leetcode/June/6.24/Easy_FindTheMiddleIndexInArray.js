function solution(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (sum(0, i, nums) === sum(i + 1, nums.length, nums)) {
      return i;
    }
  }

  return -1;
}
function sum(start, end, nums) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += nums[i];
  }
  return sum;
}

const input = [
  [2, 3, -1, 8, 4],
  [1, -1, 4],
  [2, 5],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
