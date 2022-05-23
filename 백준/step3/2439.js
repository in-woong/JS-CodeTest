const fs = require("fs");

const input = fs.readFileSync("./data").toString();

const n = parseInt(input);
result = "";
for (let i = 0; i < n; i ++){
    let star ="";
    for (let j = n - 1; j >= 0; j--) {
      star += j <= i ? "*": " ";
    }
    result += star + "\n";
}

console.log(result);
