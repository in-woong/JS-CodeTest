function Queue() {
  this.queue = [];
  this.front = 0;
  this.rear = 0;
}
Queue.prototype.enqueue = function (element) {
  this.queue[this.rear++] = element;
};
Queue.prototype.dequeue = function () {
  const element = this.queue[this.front];
  delete this.queue[this.front++];
  return element;
};
Queue.prototype.size = function () {
  return this.rear - this.front;
};
Queue.prototype.isEmpty = function () {
  return this.size() === 0;
};

function solution(A) {
  let count = 0;
  const yLength = A.length;
  const xLength = A[0].length;
  const visited = Array.from({ length: yLength }, () => Array(xLength).fill(0));
  for (let i = 0; i < yLength; i++) {
    for (let j = 0; j < xLength; j++) {
      if (visited[i][j] === 0 && A[i][j] === 1) {
        bfs(i, j, visited, yLength, xLength, A);

        count++;
      }
    }
  }
  return count;
}

function bfs(y, x, visited, yLength, xLength, A) {
  const queue = new Queue();

  const d = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];

  queue.enqueue([y, x]);
  visited[y][x] = 1;
  let count = 0;

  while (!queue.isEmpty()) {
    let [y, x] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const dy = d[i][0] + y;
      const dx = d[i][1] + x;
      count++;
      if (
        yLength > dy &&
        dy >= 0 &&
        xLength > dx &&
        dx >= 0 &&
        visited[dy][dx] !== 1 &&
        A[dy][dx] === 1
      ) {
        queue.enqueue([dy, dx]);
        visited[dy][dx] = 1;
      }
      //   console.log(queue);
    }
  }
  return count;
}

const input = [
  [1, 1, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];

console.log(`${1} ${solution(input)}`);
