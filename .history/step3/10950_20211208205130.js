const fs = require("fs");
const data = fs.readFileSync("./data").toString().split("\n");
data.map(a=>data.append(a.split('')));
console.log(data);
