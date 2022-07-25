/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  const dp = [0, 0];
  const mod = 10 ** 9 + 7;
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let even = dp[1];
    let odd = dp[0];
    if (arr[i] % 2) {
      //홀수일때
      dp[0] = even + 1;
      dp[1] = odd;
    } else {
      //짝수일때
      dp[1]++;
    }
    answer += dp[0];
  }

  return answer % mod;
};
