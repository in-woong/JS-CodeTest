function GCD(a, b) {
  if (b == 0) {
    return a;
  } else {
    return GCD(b, a % b);
  }
}

function solution(A, B) {
  let gcd = GCD(A, B);
  console.log(gcd, A, B);
  let gcdA = 0;
  let gcdB = 0;

  while (gcdA != 1) {
    gcdA = GCD(A, gcd);
    A = A / gcdA;
  }

  while (gcdB != 1) {
    gcdB = GCD(B, gcd);
    B = B / gcdB;
  }
  
  if (A == 1 && B == 1) {
    return 1;
  } else {
    return 0;
  }
}

const input = [
  [12, 6],
  [17, 7],
  [9, 18],
  [9, 27],
  [13,27],
  [7, 49],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
