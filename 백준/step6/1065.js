//각 자리가 등차수열을 이루는 수가 한수
//N보다 작거나 같은 한수의 개수를 출력하는 프로그램은?

//길이를 확인하고, N[0]-N[1]== N[1]-N[2]== N[2]- ... N[길이]

const fs = require("fs");

const input = fs.readFileSync("./data").toString();
const N = parseInt(input);

function hanSoo(N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (i < 100) {
      count++;
    } else {
      if (
        i.toString()[0] - i.toString()[1] ===
        i.toString()[1] - i.toString()[2]
      ) {
        count++;
      }
    }
  }
  return count;
}

console.log(hanSoo(N));
