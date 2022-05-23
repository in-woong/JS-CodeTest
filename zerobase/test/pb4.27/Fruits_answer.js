function solution(fruits) {
  const n = fruits.length;
  const dp = [];
  dp[0] = fruits[0];

  let curMax = dp[0];

  for (let i = 1; i < n; i++) {
    dp[i] = fruits[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    curMax = Math.max(curMax, dp[i]);
  }
  return curMax;
}
const input = [
  [-2, 5, -3, 6, 8, -1, -5, 3],
  [-1, -9, -9, -1, 3, 26, -9, 0, -3, 8, -9, 8, -6, 5],
  [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [-1000, 1000, -1000, 1000, -1000, 1000, -1000],
  [-1000, 2000, -3000, 4000, -5000, 4000, -3000, 2000, -1000],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
