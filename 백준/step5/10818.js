const fs = require("fs");
const input = fs.readFileSync("./data").toString().split("\n");
const n = input[0];
const array = input[1].split(" ").map((v) => v * 1);
array.sort(function (a, b) {
  return a - b;
});
console.log(array[0], array[array.length - 1]);
