const fs = require("fs");

const input = fs.readFileSync("./data").toString().trim().split("\n");
const n = parseInt(input[0]);
let array = [];
for (let i = 1; i <= n; i++) {
  array = input[i];
  let score = 0;
  let num = 0;
  for (let j = 0; j < array.length; j++) {
    if (array[j] == "O") {
      num += 1;
    } else {
      num = 0;
    }
    score += num;
  }
  console.log(score);
}
