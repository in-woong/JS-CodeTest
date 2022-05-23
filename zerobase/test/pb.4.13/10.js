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
  const yLength = A.length;
  const xLength = A[0].length;
  const check = Array.from({ length: yLength }, () => Array(xLength).fill(0));

  const d = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];
  const queue = new Queue();
  queue.enqueue([0, 0]);
  while (!queue.isEmpty()) {
    const [y, x] = queue.dequeue();
    check[y][x] = 1;

    if (A[y][x] === 1) {
      if (y == yLength - 1 && x == xLength - 1) {
        return 1;
      }
      for (let i = 0; i < 4; i++) {
        const dy = y + d[i][0];
        const dx = x + d[i][1];
        if (
          yLength > dy &&
          dy >= 0 &&
          xLength > dx &&
          dx >= 0 &&
          check[dy][dx] !== 1
        ) {
          queue.enqueue([dy, dx]);
        }
      }
    }
  }
  return 0;
}

const input = [
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 0],
  [0, 0, 1, 0],
];

console.log(`${1} ${solution(input)}`);
