function solution(n) {
  while (n.length > 1) {
    n.sort((a, b) => a - b);
    let first = n.pop();
    let second = n.pop();
    if (first > second) {
      n.push(first - second);
    }
    console.log(n);
  }
  if (n.length == 0) return 0;
  return n.pop();
}

const input = [
  [4, 8, 6, 1, 2],
  [1, 1, 1, 1],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
