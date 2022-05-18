function solution(A) {
  let total = A.length;
  let answer = 0;
  let tick = 0;
  let queue = [];

  while (true) {
    let index = 0;
    //tick 에 맞춰서 실행할 수 있는 놈을 queue에 넣는다.
    while (true) {
      if (index >= A.length) break;
      if (A[index][0] <= tick) {
        queue.push(A.splice(index, 1)[0]);
        console.log(queue, 'push');
      } else {
        index++;
      }
    }
    //시간을 ++하는 조건
    if (queue.length === 0) {
      if (A.length === 0) {
        break;
      } else {
        tick++;
      }
    } else {
      let minIndex = 0;
      for (let i = 1; i < queue.length; i++) {
        console.log(queue, 'queue');
        //지금 실행할 수 있는 것 중에서 최소 시간이 걸리는 것을 찾는다.
        if (queue[minIndex][1] > queue[i][1]) minIndex = i;
      }
      //실행
      tick += queue[minIndex][1];
      //걸린 시간(대기시간 + 실행시간) 만큼을 더한다
      answer += tick - queue[minIndex][0];

      queue.splice(minIndex, 1);
    }
  }
  return Math.floor(answer / total);
}

const input = [
  [
    [0, 3],
    [1, 5],
    [3, 10],
  ],
  [
    [0, 3],
    [0, 5],
  ],
  [
    [0, 3],
    [0, 5],
    [0, 11],
  ],
  [
    [0, 3],
    [3, 5],
    [11, 2],
  ],
  [
    [0, 3],
    [3, 5],
    [11, 2],
    [15, 5],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
