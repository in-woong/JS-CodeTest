function solution(arr, n) {
  let queue = [];

  let count = 0;
  console.log(queue);
  while (arr.length || queue.length) {
    console.log('count');
    //arr 값을 빈 queue만큼 채워 넣는다.
    const queueLen = queue.length;
    queue = queue
      .map((item) => {
        if (item > 0) {
          return item - 1;
        }
        return 0;
      })
      .filter((item) => item !== 0);

    for (let i = 0; i < n - queueLen; i++) {
      if (arr.length) {
        queue.push(arr.shift());
      }
    }

    console.log('count', queue, arr);
    count++;
  }

  return count;
}

const input = [
  [[1, 1, 1, 2, 2, 1, 1], 3],
  [[1], 10],
  [[10], 1],
  [[1, 1, 2, 2, 3, 3], 2],
  [[10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 2],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1])}`);
}
