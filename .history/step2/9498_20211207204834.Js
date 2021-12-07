const fs = require("fs");

const data = fs.readFileSync("./data").toString().split(" ");

const score = parseInt(data[0]);

if (90<=score <= 100) {
  console.log("A");
} else if (80 <= score <= 89) {
  console.log("B");
} else if (70 <= score <= 79) {
  console.log("C");
} else if (60 <= score <= 69) {
  console.log("D");
} else {
  console.log("F");
}
