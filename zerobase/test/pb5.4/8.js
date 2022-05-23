function solution(h, w) {
  let result = 1;
  result = factorial(h + w - 2) / (factorial(h - 1) * factorial(w - 1));
  return result;
}
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
const input = [[2, 3]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
