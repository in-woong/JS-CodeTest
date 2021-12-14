const { Console } = require("console");
const fs = require("fs");

const data = fs.readFileSync("./data").toString().split("\n");
const T = data[0];
let result = [];
for (let i in T) {
  result.push(data[i].split(" "));
}

console.log(result);
