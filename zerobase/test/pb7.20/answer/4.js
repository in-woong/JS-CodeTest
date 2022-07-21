/**
 * @param N {int}
 * @param K {int}
 * @return Array
 */
function solution(N, K) {
  if (K == 0) {
    return Array.from(Array(N), (_, i) => i + 1);
  }
  if (N % (2 * K) != 0) {
    return [-1];
  }

  let result = new Array(N + 1);
  for (let i = 1; i <= N; i++) {
    if (result[i] == null) {
      result[i] = i + K;
      result[i + K] = i;
    }
  }
  return result.slice(1);
}
