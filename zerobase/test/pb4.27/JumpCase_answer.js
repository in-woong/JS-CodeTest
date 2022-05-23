function solution(n, k) {
  const MOD = 1000000007;
  const dp = [];
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(k + 1);
  }

  dp[0][0] = 1;

  //0까지 가는 경우 ~ n까지 가는 경우의수를 각각 구해나가는 것,
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k && j <= i; j++) {
      //i는 0~n중에 어디까지 가는 경우를 구하는 지를 뜻함
      //j는 더할 수 있는 숫자를 뜻함,
      //i-j는 i까지 가는데 j만큼남았으니 경우는 1가지
      dp[i][j] = 0;
      for (let z = 0; z <= k; z++) {
        dp[i][j] += dp[i - j][z] || 0;
        dp[i][j] %= MOD;
      }
    }
  }
  console.log(dp);
  let result = 0;
  for (let i = 0; i <= k; i++) {
    result += dp[n][i] || 0;
    result %= MOD;
  }
  return result;
}



const input = [
  [5, 3],
  [5, 2],
  [11, 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
