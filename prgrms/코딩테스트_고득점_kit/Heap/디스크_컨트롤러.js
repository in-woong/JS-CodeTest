function solution(jobs) {
  let queue = jobs.slice();
  let wait = [];
  let work = [];
  let time = 0;
  let result = 0;

  while (queue.length !== 0 || wait.length !== 0) {
    const array = queue.filter((a) => {
      if (a[0] <= time) {
        wait.push(a);
      }
      return a[0] > time;
    });
    queue = array;
    wait.sort((a, b) => a[1] - b[1]);
    work = wait.shift();
    time += work[1];
    result +=(time -work[0])
  }

  return result /jobs.length;
}

const input = [
  [
    [0, 3],
    [1, 9],
    [2, 6],
  ],
];
for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
