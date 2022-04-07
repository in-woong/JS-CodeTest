function solution([A, B]) {
  return (A ^ B).toString(2).match(/1/g).length;
}

const input = [
  [29, 15],
  [31, 10],
  [18, 8],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i])}`);
}
