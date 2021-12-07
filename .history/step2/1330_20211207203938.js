const fs = require("fs");

const data = fs.readFileSync("./data").toString().split("");
//백준에서는 "/dev/stdin"

const a = data[0];
const b = data[1];

console.log(a,b)
if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else if (a == b) {
  console.log("==");
}
