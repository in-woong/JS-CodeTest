//전자레인지에 버튼 A,B,C가 있다.(5분, 1분,10초)
//T=100이라고 하면 , B를 1번, C는 4번 누르면 된다. T=234처럼 시간을 정확히 맞출 수 없는 경우가 있고, 최소횟수가 아닌 경우도 있다.
//input)) 요리시간 T 정수 (1<= T <= 10000)
//output)) A,B,C 횟수를 차례대로 출력, 버튼을 누르지 않는 경우에는 0, 맞출 수 없으면 -1을 첫줄에 출력

const fs = require('fs');

const input = fs.readFileSync('./data').toString();

let t = parseInt(input);

let A = Math.floor(t / 300);
t -= 300 * A;
let B = Math.floor(t / 60);
t -= 60 * B;
let C = Math.floor(t / 10);
t -= 10 * C;
if (t !== 0) {
  console.log(-1);
} else {
  console.log(A);
  console.log(B);
  console.log(C);
}
