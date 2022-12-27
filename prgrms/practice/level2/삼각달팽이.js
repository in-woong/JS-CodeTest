function solution(n) {
  const result = Array.from({ length: n }, (_, idx) => new Array(idx + 1));
  let [y, x] = [-1, 0];
  let cnt = 0;

  while (n > 0) {
    for (let i = 0; i < n; i += 1) result[++y][x] = ++cnt;
    for (let i = 0; i < n - 1; i += 1) result[y][++x] = ++cnt;
    for (let i = 0; i < n - 2; i += 1) result[--y][--x] = ++cnt;
    n -= 3;
  }
  return result.flatMap((el) => el);
}

console.log(solution(4));
