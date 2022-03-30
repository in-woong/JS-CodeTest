function solution(A, B) {
  let resultA = [];
  let resultB = [];
  for (let i = 2; i < Number(A); i++) {
    if (isPrime(i) && Number(A) % i == 0) {
      resultA.push(i);
    }
  }
  if (Number(A) % 2 == 0) {
    resultA.push(2);
  }
  for (let i = 2; i < Number(B); i++) {
    if (isPrime(i) && Number(B) % i == 0) {
      resultB.push(i);
    }
  }
  if (Number(B) % 2 == 0) {
    resultB.push(2);
  }

  resultA.sort((a, b) => a - b);
  resultB.sort((a, b) => a - b);

  console.log(resultA, resultB);
  if (resultA.length == 0 || resultB.length == 0) return 0;
  if (resultA.length !== resultB.length) return 0;
  for (let i = 0; i < resultA.length; i++) {
    if (resultA[i] == resultB[i]) {
      continue;
    } else {
      return 0;
    }
  }
  return 1;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(solution(256, 2392));
