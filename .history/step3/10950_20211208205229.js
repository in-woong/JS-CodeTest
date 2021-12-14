const fs = require("fs");
const data = fs.readFileSync("./data").toString().split("\n");
data.forEach((a) => console.log(typeof a));
console.log(data);
