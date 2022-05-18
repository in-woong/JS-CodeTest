function GCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return GCD(b, a % b);
  }
}

function solution(A) {
  console.log(A);
  A.sort();
  let = result = GCD(A[0], A[1]);
  for (let i = 2; i < A.length; i++) {
    result = GCD(result, A[i]);
  }
  return result;
}

const input = [6, 12, 4];

console.log(solution(input));
