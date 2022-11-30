function solution(n) {
  let array = Array.from({ length: n + 1 }, () => true);

  const answer = [];
  for (let i = 2; i * i <= n; i += 1) {
    if (array[i]) {
      for (let j = i * i; j <= n; j += i) {
        array[j] = false;
      }
    }
  }

  return array.reduce((acc, cur) => (cur ? (acc += 1) : acc), 0) - 2;
}
