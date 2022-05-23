const fs = require('fs');
const input = fs.readFileSync('./data').toString().split('\n');
const T = Number(input[0]);
let x;
let result = '';
for (let i = 1; i <= T; i++) {
    x = input[i].split(' ');
    result += `Case #${i}: ${parseInt(x[0])} + ${parseInt(x[1])} = ${parseInt(x[0]) + parseInt(x[1])}` + '\n';
}
console.log(result);
