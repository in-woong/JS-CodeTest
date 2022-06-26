function solution(strs) {
  let i = 0;
  let prefix;
  if (strs.length === 1) return strs[0];
  if (strs[0].length <= 0) return strs[0];
  while (i < strs[0].length) {
    i++;
    let prefix = strs[0].substring(0, i);
    for (const str of strs) {
      if (str.substring(0, i) !== prefix) {
        return str.substring(0, i - 1);
      }
    }
  }
  return strs[0];
}

const input = [
  ['flower', 'flow', 'flight'],
  ['dog', 'racecar', 'car'],
  [''],
  ['a'],
  ['flower', 'flower', 'flower'],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
