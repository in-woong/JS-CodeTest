const fs = require("fs");

const data = fs.readFileSync("./data");

console.log(parseInt(data));
