const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(input);
  process.exit;
});
//백준에서는 "/dev/stdin"

const a = parseInt(data[0]);
const b = parseInt(data[1]);

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else if (a == b) {
  console.log("==");
}
