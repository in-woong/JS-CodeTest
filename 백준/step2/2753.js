const fs = require("fs");

const data = fs.readFileSync("./data").toString().split(" ");

const year = parseInt(data[0]);

if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)) {
  console.log("1");
} else {
  console.log("0");
}
