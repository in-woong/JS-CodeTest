const fs = require("fs");

const data = fs.readFileSync("./data").toString().split("\n").split(" ");
const T = parseInt(data[0]);
console.log(data)
let result = [];
for (let i = 0; i < T; i++) {
  result = data[i + 1].split(" ");
  let a = parseInt(result[0]);
  let b = parseInt(result[1]);
  console.log(a + b);
}
