const fs = require("fs");

const data = fs
  .readFileSync("./data")
  .toString()
  .split("")
  .map((a) => +a);
//백준에서는 "/dev/stdin"
