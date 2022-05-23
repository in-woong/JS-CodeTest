const fs = require('fs');

const input = fs.readFileSync('./data').toString();
const data = Number(input);
const maxThree = Math.floor(data / 3);
const maxFive = Math.floor(data / 5);
let result = Infinity;

for (let i = 0; i <= maxThree; i++) {
  for (let j = 0; j <= maxFive; j++) {
    if ((i * 3) + (j * 5) == data) {
      result = Math.min(result, i + j);
    }
  }
}
if (Number.isFinite(result)) {
  console.log(result);
} else {
  console.log(-1);
}
