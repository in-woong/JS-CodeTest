const fs = require("fs");

const data = fs.readFileSync("./data").toString().split("\n");
const T = parseInt(data[0]);
let result = [];
for (let i = 0; i < T; i++) {
  result = parseInt(data[i + 1].split(" "));
  console.log(result);
}
