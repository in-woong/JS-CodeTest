const fs = require("fs");

const data = fs.readFileSync("./data").toString().split(" ");

const H = parseInt(data[0]);
const M = parseInt(data[1]);

if (M < 45) {
  console.log(`${H} \n ${M}`);
}
console.log("fuck")
