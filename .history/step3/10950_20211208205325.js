const fs = require("fs");
const data = fs.readFileSync("./data").toString().split("\n");
data.forEach((a) => data.push(a.split(" ")));
console.log(data);
