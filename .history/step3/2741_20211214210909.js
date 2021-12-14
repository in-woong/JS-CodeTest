const fs = require("fs");

const input = fs.readFileSync("./data").toString()

const n = Number(input);
let answer = ''
for(let i = 1; i <= n; i ++){
    answer += i + "\n"
};

console.log(answer);