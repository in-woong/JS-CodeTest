const fs = require("fs");

const data = fs.readFileSync("./data");

const n = parseInt(data);
let result = 0
for(let i =1; i <= n; i++){
    result += i;
}

console.log(result);