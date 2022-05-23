//s를 입력, r번반복해서 새 문자열 p를 만든다

const fs = require('fs');
const input = fs.readFileSync('./data').toString().split('\n');

const numCase = parseInt(input[0]);
for (let i = 1; i <= numCase; i++) {
  let result = [];
  const data = input[i].split(' ');
  const N = Number(data[0]);
  const S = String(data[1]);
  S.split('').map((i) => result.push(i.repeat(N)));
  console.log(result.join(""));
}
