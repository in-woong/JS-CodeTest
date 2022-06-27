function solution(n) {
  const array = [];

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    array.push(i);
    array.push(-i);
  }
  if (n % 2) {
    array.push(0);
  }
  return array;
}

const input = [5, 3, 1];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
