const fs = require("fs");

const data = fs.readFileSync("./data").toString();


for (let i = 1; i <= 9; i++) {
  console.log(`${data} * ${i} = ${data * i}`);
}
