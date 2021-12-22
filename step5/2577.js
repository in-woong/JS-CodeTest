const fs = require("fs");

const input = fs
  .readFileSync("./data")
  .toString()
  .split("\n")
  .map((v) => v * 1);

const number = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
  let counter = 0;
  for (let j = 0; j <= number.length; j++) {
    if (number[j] == i) {
      counter++;
    }
  }
  console.log(counter);
}
