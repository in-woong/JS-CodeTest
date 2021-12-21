const fs = require("fs");

//입력

let input = parseInt(fs.readFileSync("./data").toString());
let a = input;
let n = 0;

while (1) {
  if (a.toString().length < 2) {
    a = 0 + a.toString();
  }

  let sum = parseInt(a.toString()[0]) + parseInt(a.toString()[1]);
  if (sum.toString().length < 2) {
    sum = 0 + sum.toString();
  }

  let b = a.toString()[1] + sum.toString()[1];

  n += 1;
  if (input == b) {
    console.log(n);
    break;
  }
  a = b;
}
