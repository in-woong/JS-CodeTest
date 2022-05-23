const fs = require("fs");

const input = fs.readFileSync("./data").trim().toString().split("\n");

let result = [];
input.map((i) => {
  const num = i % 42;
  if (!result.includes(num)) {
    result = [...result, num];
  }
});
console.log(result.length);
