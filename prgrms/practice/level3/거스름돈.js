function solution(n, money) {
  money.sort((a, b) => a - b);
  var answer = 0;
  const dfs = (n, money) => {
    // console.log(n,money, answer)

    if (n === 0) return ++answer;
    if (!money.length) return;

    const coin = money.pop();
    const remainder = n % coin;
    const cnt = (n / coin) >> 0;

    for (let i = 0; i <= cnt; i += 1) {
      // console.log("coin",coin,cnt,i)
      dfs(coin * i + remainder, money);
    }
    money.unshift(coin);
  };
  dfs(n, money);
  return answer % 1_000_000_007;
}
