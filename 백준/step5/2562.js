const fs = require("fs");

const input = fs
  .readFileSync("./data")
  .toString()
  .split("\n")
  .map((v) => v * 1);
let result = 0;
let a = 0;
input.map((i, index) => {
  if (i > a) {
    result = index+1;
    a = i;
  } else {
    return;
  }
});
console.log(a);
console.log(result);
