function solution(n) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    if (Number.isInteger(Math.cbrt(i))) {
      array.push(i);
    }
  }
  return Math.max(...array);
}
const input = [99, 1, 100, 1000000, 100000000, 87654321];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
