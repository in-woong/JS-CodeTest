function GCD(a, b) {
  if (b == 0) {
    return a;
  } else {
    return GCD(b, a % b);
  }
}

function solution(A, B) {
  let gcd = GCD(A, B);
  let gcdA = 0;
  let gcdB = 0;
  while (gcdA != 1) {
    //A와 B의 최대공약수를 구해서, A와의 최대공약수를 구하고, A를 gcdA로 나눈다. 12,6 => 6과 12를 나누면 2,
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
