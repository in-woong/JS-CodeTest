function solution(A, B) {
    const arrA =[...new Set( primeFactors(A))]
    const arrB = [...new Set(primeFactors(B))]
    if(arrA.length!=arrB.length)return 0
    for(let i=0; i<arrA.length; i++){
        if(arrA[i]!=arrB[i])return 0
    }
    return 1
  }
  
  
  function primeFactors(n) {
    const factors = [];
    while (n % 2 == 0) {
      factors.push(2);
      n = n / 2;
    }
    for (let i = 3; i * i <= n; i = i + 2) {
      while (n % i == 0) {
        factors.push(i);
        n = n / i;
      }
    }
    if (n > 2) {
      factors.push(n);
    }
    return factors;
  }
const input = [[12, 6]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(...input[i])}`);
}
