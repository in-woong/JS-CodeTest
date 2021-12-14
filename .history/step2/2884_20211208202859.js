const fs = require("fs");

const data = fs.readFileSync("./data").toString().split(" ")

const H = data[0];
const M = data[1];