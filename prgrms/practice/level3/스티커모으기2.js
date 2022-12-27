function solution(sticker) {
  if (sticker.length === 1) return sticker[0];
  const dp = sticker.slice();
  dp.pop();
  const dptwo = sticker.slice();
  dptwo.shift();

  for (let i = 1; i < dp.length; i += 1) {
    if (i === 1) {
      dp[i] = Math.max(dp[i - 1], dp[i]);
    } else {
      dp[i] = Math.max(dp[i - 2] + dp[i], dp[i - 1]);
    }
  }

  for (let i = 1; i < dptwo.length; i += 1) {
    if (i === 1) {
      dptwo[i] = Math.max(dptwo[i - 1], dptwo[i]);
    } else {
      dptwo[i] = Math.max(dptwo[i - 2] + dptwo[i], dptwo[i - 1]);
    }
  }

  return Math.max(dp[dp.length - 1], dptwo[dptwo.length - 1]);
}
