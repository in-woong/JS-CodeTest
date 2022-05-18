function solution(arr) {
  let n = parseInt(arr?.[0], 2);
  let result = n ? n : 0;
  for (let i = 1; i < arr.length; i++) {
    result = n & parseInt(arr?.[i], 2);
    n = result;
  }

  return result;
}

const input = [
  ['10110', '1010', '11110'],
  ['1101'],
  [],
  ['101010', '10101'],
  ['110011', '101010', '111110'],
  ['11111', '1010101', '1110111'],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
