//S=A[0]*B[0] + ... + A[N-1]*B[N-1]로 정의할 때 S값을 가장 작게 만들기 위한 A의 수 재배열
// S의 최솟값을 출력
//input) N(N<=50)
//A에 있는 N개의 수(0<a<=100)
//B에 있는 N개의 수(0<b<=100)

//제일 큰 값에 b에 맞는 a 값을 곱해서 최솟값을 출력해야한다.

const fs = require('fs');

const input = fs.readFileSync('./data').toString().trim().split('\n');

const N = parseInt(input.shift());
const [A, B] = input.map((i) => i.split(' ').map((i) => i * 1));
A.sort(function (a, b) {
  return a - b;
});
B.sort(function (a, b) {
  return b - a;
});
let count = 0;
for (let i = 0; i < N; i++) {
  count += A[i] * B[i];
}

console.log(count);
