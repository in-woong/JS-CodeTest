function solution(s) {
  const alphabets = {};
  let fromIndex = 0;

  return s.split('').reduce((longest, c, i) => {
    console.log(longest, c, i, alphabets, fromIndex);
    if (fromIndex <= alphabets[c]) {
      fromIndex = alphabets[c] + 1;
    }
    alphabets[c] = i;
    return Math.max(longest, i - fromIndex + 1);
  }, 0);
}

const input = [
  'abssccbsbsv',
  'abcab',
  'bbbb',
  'asscssf',
  'yeongmin',
  'noooeoool',
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
