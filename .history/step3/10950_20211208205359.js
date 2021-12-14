const fs = require("fs");
const data = fs.readFileSync("./data").toString().split("\n");
let result = []
data.forEach((a) => result.push(a.split(" ")));
console.log(result);
