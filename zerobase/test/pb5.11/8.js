function solution(nums, d) {
  let result = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        result.push(nums[i]);
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] % d == 0) count++;
  }
  return count;
}

const input = [[[4, 1, 2, 1, 4], 2]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
