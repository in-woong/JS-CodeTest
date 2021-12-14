const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const x = input[0];
  const y = input[1];

  if (0 < x && 0 < y) {
    console.log(1);
  } else if (x < 0 && 0 < y) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (0 < x && y < 0) {
    console.log(4);
  }

  process.exit();
});
