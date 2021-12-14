const fs = require("fs");

const data = fs.readFileSync("./data").toString().split(" ");

const H = parseInt(data[0]);
const M = parseInt(data[1]);

if (45 <= M) {
  console.log(`${H} ${M - 45}`);
} else if (M < 45 && 1 <= H) {
  console.log(`${H - 1} ${M + 15}`);
} else if (M < 45 && H < 1) {
  console.log(`${23} ${M + 15}`);
}
