//이진탐색
// const fs = require('fs');
// const [A, ...B] = fs.readFileSync('./data').toString().trim().split('\n');
// const [n, routerN] = A.split(' ').map((v) => v * 1);

// //집의 좌표를 순서대로 정렬하여 home으로 할당
// let home = B.map((v) => v * 1).sort((a, b) => a - b);
// console.log(home, 'First');
// //제일 작은 것을 tempmin으로 고정
// const tempmin = home[0];
// //home은 집 사이의 간격
// home = home.map((v) => {
//   console.log(v, tempmin);
//   return v - tempmin + 1;
// });
// console.log(home, 'second');

// let left = home[0];
// let mid = 0;
// let right = home[home.length - 1];
// let answer = 0;

// let prev = home[0];
// while (left <= right) {
//   mid = Math.floor(left + right / 2);
//   let tempRouterN = 1;
//   //첫번째 집까지의 거리
//   prev = home[0];
//   for (let i = 1; i < home.length; i++) {
//     if (home[i] >= prev + mid) {
//       tempRouterN++;
//       prev = home[i];
//     }
//   }
//   if (tempRouterN < routerN) {
//     right = mid - 1;
//   } else {
//     left = mid + 1;
//     if (mid > answer) answer = mid;
//   }
// }
// console.log(answer);

const fs = require('fs');
let input = fs.readFileSync('./data').toString().trim().split('\n');
const A = input.shift();
const home = input.sort((a, b) => a - b).map((v) => v * 1);
const [n, routerN] = A.split(' ').map((v) => v * 1);

//집의 좌표를 순서대로 정렬하여 home으로 할당
let start = 1;
let mid = 0;
let end = home[home.length - 1] - home[0];
let result = 0;

while (start <= end) {
  mid = Math.floor((start + end) / 2);
  let value = home[0];
  let cnt = 1;
  for (let i = 1; i < n; i++) {
    //앞에서부터 지금 설정된 mid값으로 공유기가 몇개나 설치되는 지 설치 해본다.
    if (home[i] >= value + mid) {
      value = home[i];
      cnt += 1;
    }
  }
  //더 많은 공유기를 설치 할 수 있으면 거리를 증가시킨다.
  if (cnt >= routerN) {
    start = mid + 1;
    result = mid;
  } else {
    //공유기를 더 많이 설치 하지 못할 때는 거리를 감소
    end = mid - 1;
  }
}
console.log(result);
