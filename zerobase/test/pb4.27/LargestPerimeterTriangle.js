function solution(A) {
  A.sort((a, b) => b - a);
  for (let i = 0; i < A.length - 2; i++) {
    const temp = A.slice(i, i + 3);
    if (isTriagle(temp)) {
      return temp.reduce((a, b) => a + b);
    }
  }
  return 0;
}
function isTriagle(array) {
  const [a, b, c] = array;
  return a < b + c;
}
const input = [
  [3, 2, 3],
  [2, 1, 1],
  [1000000, 500000, 500000],
  [66, 81, 28, 18, 22, 9, 36, 99, 84, 45],
  [
    427, 393, 71, 886, 36, 102, 77, 924, 409, 496, 477, 788, 491, 561, 106, 12,
    310, 609, 399, 49,
  ],
  [
    317809, 507715, 903456, 868864, 334083, 462684, 546480, 405684, 360852,
    721044,
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
