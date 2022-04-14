function solution(A, R) {
  let result = '';

  A.sort((a, b) => b - a);

  result += A.splice(R / A.length, 1);
  result += A[R % A.length === 0 ? A.length - 1 : (R % A.length) - 1];
  return result;
}
