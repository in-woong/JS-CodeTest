//가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오
//단어의 길이가 1,000,000
const fs = require('fs');
const input = fs.readFileSync('./data').toString().toLowerCase();
//charCodeAt
//charAt
//fromCharCode
//97~122까지 array를 만들고
const result = new Array(26).fill(0);
for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97]++;
}
const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? '?' : String.fromCharCode(index + 65));
