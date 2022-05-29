function solution(A) {
  let total = A.length;
  let answer = 0;
  let tick = 0;
  let queue = [];

  while (true) {
    let index = 0;
    console.log('start', index, A);
    //index를 A의 길이보다 같거나 크게 만들기 위한 작업?
    while (true) {
      if (index >= A.length) {
        console.log('break;', index, A);
        break;
      }

      if (A[index][0] <= tick) {
        queue.push(A.splice(index, 1)[0]);
        console.log('push', queue, A, index);
      } else {
        index++;
        console.log('index', queue, A, index);
      }
    }

    if (queue.length === 0) {
      if (A.length === 0) {
        break;
      } else {
        tick++;
      }
    } else {
      let minIndex = 0;
      for (let i = 1; i < queue.length; i++) {
        if (queue[minIndex][1] > queue[i][1]) minIndex = i;
      }
      tick += queue[minIndex][1];
      answer += tick - queue[minIndex][0];
      queue.splice(minIndex, 1);
    }
    console.log(queue, A, tick, index);
  }
  return Math.floor(answer / total);
}
// function solution(A) {
//   let total = A.length;
//   let tick = 0;
//   let answer = 0;
//   let queue = [];

//   //tick보다 A[i][0]이 작으면 다 queue로 집어 넣는다.
//   while (true) {
//     if (A.length !== 0 && queue.length !== 0) break;
//     //splice를 쓰는 법 => index를 따로 구성해주고 while 문을 사용 한다.
//     let index = 0;
//     while (true) {
//       if (index >= A.length) break;

//       if (A[index][0] <= tick) {
//         queue.push(A.splice(index, 1)[0]);
//       } else {
//         index++;
//       }
//     }
//     if (queue.length === 0) break;
//     queue.sort((a, b) => a[1] - b[1]);

//     const [start, end] = queue.shift();
//     tick += end;
//     answer += tick - start;
//   }

//   return Math.floor(answer / total);
// }
const input = [
  [
    [0, 3],
    [1, 5],
    [3, 10],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
