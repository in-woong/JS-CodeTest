const fs = require("fs");
const data = fs.readFileSync("./data").toString().split("\n");
data.forEach(a=>console.log(a));
console.log(data);
