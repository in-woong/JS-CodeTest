function solution(A) {
  let queue = A.slice();
  const wait = [];
  const work = [];
  let time = 0;
  let result = 0;

  while (queue.length !== 0 || wait.length !== 0) {
    //시작되었어야 하는 것들 대기열로 이동
    const array = queue.filter((item) => {
      if (item[0] <= time) {
        wait.push(item);
      }
      return item[0] > time;
    });
    queue = array;
    wait.sort((a, b) => b[1] - a[1]);
    work = wait.pop();
    time += work[1];
    result += time - work[0];
  }
  return Math.floor(result / A.length);
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
