function solution(strs) {
  const str = strs[0];
  if (str.length <= 0) return '';
  if (strs.length <= 1) return strs[0];
  for (let j = 0; j < str.length; j++) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][j] !== str[j]) {
        return str.split('').slice(0, j).join('');
      }
    }
  }
  return str;
}

const input = [
  ['flower', 'flow', 'flight'],
  ['dog', 'racecar', 'car'],
  [''],
  ['a'],
  ['flower', 'flower', 'flower', 'flower'],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
