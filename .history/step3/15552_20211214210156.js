const fs = require("fs");

const input = fs.readFileSync("./data").toString().split("\n");

let T= parseInt(input[0]);
let answer = '';

for (let i = 1; i <= T; i++){
    let num = input[i].split(" ");
    answer += Number(num[0]) + Number(num[1]) + "\n"
}
