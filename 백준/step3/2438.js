const fs = require("fs");

const input = fs.readFileSync("./data").toString();
const n = parseInt(input);
let result = "";

for (let i = 0; i < n; i++) {
  result += "*";
  console.log(result);
}
