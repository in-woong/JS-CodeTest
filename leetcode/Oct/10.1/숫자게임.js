function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (const a of A) {
    const max = B[B.length - 1];
    if (a < max) {
      answer++;
      B.pop();
    }
  }

  return answer;
}
