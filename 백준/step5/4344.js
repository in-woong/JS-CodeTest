const fs = require("fs");

const input = fs.readFileSync("./data").toString().trim().split("\n");

const n = input[0] * 1;

for (let i = 1; i <= n; i++) {
  let array = input[i]
    .trim()
    .split(" ")
    .map((v) => v * 1);
  let num2 = array.shift() * 1;
  let count = 0;

  let avg = array.reduce((acc, v) => (acc += v * 1), 0);
  avg /= num2;

  for (let j = 0; j < num2; j++) {
    if (array[j] > avg) {
      count++;
    }
  }
  console.log(`${Math.round((count / num2) * 100000) / 1000}%`);
}
