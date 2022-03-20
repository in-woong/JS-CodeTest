//N종류의 동전을 가지고, 가치의 합을 K로 만들려고 할 때 동전의 개수의 최솟값을 구하는 프로그램은 구현
//K원을 만드는데 필요한 동전 개수의 최솟값출력

const fs = require('fs');

const strToNumArr = (str) =>
  str.split(' ').map((numString) => Number(numString));

const input = fs.readFileSync('./data').toString().trim().split('\n');
const [N, K] = strToNumArr(input.shift());

input.reverse();

function solution(n, k, list) {
  let count = 0;
  for (let i of list) {
    i = parseInt(i);
    if (k >= i) {
      count += parseInt(Math.floor(k / i));
      k = k % i;
    }
  }
  console.log(count);
}

solution(N, K, input);
