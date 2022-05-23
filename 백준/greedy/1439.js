//연속된 하나 이상의 숫자를 뒤집을 때, 행동의 최소횟수를 출력하시오
//S의 길이는 100만보다 작다

const fs = require('fs');

const input = fs.readFileSync('./data').toString().split('').map(i=>i*1);
let result = 0;
let count1 = 0;
let count0 = 0;

if (input[0] == 0) {
  count0 += 1;
} else {
  count1 += 1;
}

for (let i = 1; i < input.length; i++) {
  if (input[i-1] !== input[i]) {
    if (input[i] == 1) {
      count0++;
    } else {
      count1++;
    }
  }
}
result = Math.min(count0, count1);
console.log(result);
