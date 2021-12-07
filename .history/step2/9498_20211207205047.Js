const fs = require("fs");

const data = fs.readFileSync("./data").toString().split(" ");

const score = parseInt(data[0]);
console.log(score)
if (100>= score >= 90) {
  console.log("A");
} else if (89 >= score >= 80) {
  console.log("B");
} else if (79 >= score >= 70) {
  console.log("C");
} else if (69 >= score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
