const fs = require("fs");

const data = fs.readFileSync("./data").toString().split("\n");
const T = parseInt(data[0]);
let result = [];
for (let i = 0; i < T; i++) {
  result = data[i + 1].split(" ");
  let a = result[0]+result[1];
  console.log(a)
}
