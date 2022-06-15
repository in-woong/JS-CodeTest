function solution(n) {
  let count = 0;
  for (let i = n; i > 0; i--) {
    count += i;
  }
  return count;
}
const input = [4, 3, 7, 16];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
