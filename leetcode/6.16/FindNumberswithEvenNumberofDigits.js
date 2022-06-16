// Given an array nums of integers, return how many of them contain an even number of digits.

function solution(nums) {
  return nums.reduce((acc, cur) => {
    if (cur.toString().length % 2 == 0) acc++;
    
    return acc;
  }, 0);
}

const input = [[555, 901, 482, 1771]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
