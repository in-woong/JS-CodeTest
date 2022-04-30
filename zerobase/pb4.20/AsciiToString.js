function solution(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(String.fromCharCode(array[i]));
  }
  return result.join('');
}

const input = [
  [71, 111, 111, 103, 108, 101],
  [65, 108, 71, 111, 82, 105, 116, 72, 109],
  [],
  [65],
  [122],
  [119, 111, 114, 107],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}

