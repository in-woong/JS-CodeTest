const fs = require("fs");

const data = fs
  .readFileSync("./data")
  .toString()
  .split("")
//백준에서는 "/dev/stdin"
