//N종류의 동전을 가지고, 가치의 합을 K로 만들려고 할 때 동전의 개수의 최솟값을 구하는 프로그램은 구현
//K원을 만드는데 필요한 동전 개수의 최솟값출력

const fs = require('fs');

const input = fs.readFileSync('./data').toString().split('\n');
const coinNum= input.shift().split(" ")

const N = parseInt(coinNum[0]);
const K = parseInt(coinNum[1]);

console.log(N,K)