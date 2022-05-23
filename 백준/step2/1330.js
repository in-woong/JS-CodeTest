const fs = require("fs");

const data = fs.readFileSync("./data").toString().split(" ");
//백준에서는 "/dev/stdin"

const a = parseInt(data[0]);
const b = parseInt(data[1]);

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else if (a == b) {
  console.log("==");
}
