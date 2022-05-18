function solution(arr) {
  return arr.sort((a, b) => a - b);
}

const input = [[30, 7, 44, 6, 17]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
