var subarraysDivByK = function (A, K) {
  let sums = new Array(A.length + 1).fill(0);
  let res = 0;
  for (let i = 1; i <= A.length; i++) {
    sums[i] = sums[i - 1] + A[i - 1];
  }
  console.log(sums);

  let dp = new Array(K).fill(0);
  dp[0] = 1;
  for (let i = 1; i < sums.length; i++) {
    let mod = ((sums[i] % K) + K) % K;
    console.log(mod, i);
    res = res + dp[mod];
    dp[mod] = dp[mod] + 1;
    console.log(dp, res);
  }

  return res;
};
