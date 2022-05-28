function solution(A) {
  let total = A.length;
  let answer = 0;
  let tick = 0;
  let queue = [];

  while (true) {
    let index = 0;
    while (true) {
      if (index >= A.length) {
        console.log('break;');
        break;
      }

      if (A[index][0] <= tick) {
        queue.push(A.splice(index, 1)[0]);
      } else {
        index++;
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
