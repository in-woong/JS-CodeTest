const fs = require("fs");

const data = fs.readFileSync("./data").toString().split(" ");

const score = parseInt(data[0]);
if (90 <= score && score <= 100) {
  console.log("fuck");
} else {
  console.log("wow");
}
