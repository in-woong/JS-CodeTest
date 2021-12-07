const fs = require("fs");

const data = fs.readFileSync("./data").toString().split("\n");
//백준에서는 "/dev/stdin"

const a = data[0];
const b = data[1];

const c = a * b[2];
const d = a * b[1];
const e = a * b[0];

const f = e * 100 + d * 10 + c;

console.log(c);
console.log(d);
console.log(e);
console.log(f);
