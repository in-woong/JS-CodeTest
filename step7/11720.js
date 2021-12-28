const fs = require('fs');

const input = fs.readFileSync('./data').toString().split('\n');
const N = parseInt(input[0]);

let result = 0;

for (let i = 0; i < N; i++) {
  result += parseInt(input[1].toString()[i]);
}

console.log(result);
