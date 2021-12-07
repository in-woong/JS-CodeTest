const fs = require("fs");

const data = fs.readFileSync("./data").toString().split("\n");
//백준에서는 "/dev/stdin"

console.log(data);

const a = data[0];
const b = data[1];