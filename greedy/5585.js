//500엔, 100엔, 50엔, 10엔, 5엔, 1엔이 충분히 있고, 거름돈을 가장 적게 준다.
// 1000엔 지폐를 한장 냈을 때  잔돈에 포함된 잔돈의 개수를 구는 프로그램을 구하여라

//input 한줄로 이루어져있고, 지불할 돈 1개(1<= <1000)
//output 1행으로 잔돈에 포함된 매수를 출력

const fs = require('fs');
const changeArray = [500, 100, 50, 10, 5, 1];
let count = 0;
const input = parseInt(fs.readFileSync('./data').toString().trim());
let change = 1000 - input;

changeArray.map((i) => {
  count += Math.floor(change / i);
  change -= i * Math.floor(change / i);
});

console.log(count);
