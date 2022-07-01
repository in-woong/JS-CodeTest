// function solution(nums) {
//   let max = Number.MIN_SAFE_INTEGER;
//   let maxArray = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length + 1; j++) {
//       const array = nums.slice(i, j);

//       const num = array.reduce((acc, cur) => acc + cur, 0);

//       max = max < num ? num : max;
//     }
//   }
//   return max;
// }

function solution(nums) {
  let n = nums.length;
  let dp = Array(n).fill(0);
  dp[0] = nums[0];

  for (let i = 1; i < n; i++) {
    if (dp[i - 1] < 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = dp[i - 1] + nums[i];
    }
  }
  
  return Math.max(...dp);
}

function maxSubArray(nums) {
  if (nums.length == 0) return 0;
  let result = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result = Math.max(sum, result);
    sum = sum < 0 ? 0 : sum;
  }
}
const input = [[-2, 1, -3, 4, -1, 2, 1, -5, 4], [1], [5, 4, -1, 7, 8]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
