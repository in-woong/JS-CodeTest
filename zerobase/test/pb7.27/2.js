function solution(n) {
  let answer = 1;
  for (let i = 0; i < n; i++) {
    answer = (answer * 2) % 1_000_000_007;
  }
  return answer - 1;
}
