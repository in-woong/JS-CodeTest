const fs = require("fs");

const input = fs.readFileSync("./data").toString().trim().split("\n");

const n = parseInt(input[0]);
const array = input[1]
  .trim()
  .split(" ")
  .map((v) => v * 1);

const maxTest = Math.max.apply(null, array);
let dp = [];

array.map((i) => (dp = [...dp, (i / maxTest) * 100]));

let result = 0;
dp.map((i) => (result += i));

console.log(result/dp.length);
