const fs = require("fs");

const data = fs.readFileSync("./data").toString();

console.log(data);
