function solution(S) {
  let size = S.length;
  for (let i = 0; i < size / 2; i++) {
    if (S[i] != S[size - i - 1]) {
      return 0;
    }
  }
  return 1;
}
