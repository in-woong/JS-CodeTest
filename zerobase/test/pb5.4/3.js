function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count = Number(s[i]) | Number[count];
  }
  return parseInt(count, 2);
}

const input = [['10110', '1010', '11110']];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
