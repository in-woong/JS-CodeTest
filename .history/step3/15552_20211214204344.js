const { Console } = require("console");
const fs = require("fs");

const data = fs.readFileSync("./data").toString().split("\n");
const T = parseInt(data[0]);
let result = [];
console.log(T);
for (let i; i < T; i++) {
  result.push(data[i + 1].split(" "));
  console.log(i + 1);
}

console.log(result);
