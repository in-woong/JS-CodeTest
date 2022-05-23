const fs = require("fs");

const input = fs.readFileSync("./data").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const numbers = input[i].split(" ").map((v) => v * 1);
  console.log(numbers[0] + numbers[1]);
}
