const fs = require("fs");
const data = fs.readFileSync("./data").toString().split("\n");
let result = [];
data.forEach((a) => result.push(a.split(" ")));
const N = result[0];
let i;
for (i = 1; i <= N; i++) {
  console.log(result[i][0] + result[i][1]);
}
