function Queue() {
  this.queue = [];
  this.rear = 0;
  this.front = 0;
}

Queue.prototype.enqueue = function (element) {
  this.queue[this.rear++] = element;
  return element;
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
  return this.size() == 0;
};


function solution(n, edge) {
  let count = 0;
  let visited = Array.from({ length: n + 1 }, () => false);
  let length = Array.from({ length: n + 1 }, () => Number.POSITIVE_INFINITY);
  const queue = new Queue();
  queue.enqueue('1');
  let stackLength = queue.size();

  while (!queue.isEmpty()) {
    const element = queue.dequeue();
    visited[element] = true;
    stackLength--;
    if (length[element] > count) {
      length[element] = count;
    }
    for (let i = 0; i < edge.length; i++) {
      if (edge[i][0] == element) {
        if (visited[edge[i][1]] == true) continue;

        queue.enqueue(edge[i][1]);
      } else if (edge[i][1] == element) {
        if (visited[edge[i][0]] == true) continue;

        queue.enqueue(edge[i][0]);
      }
    }

    if (stackLength == 0) {
      stackLength = queue.size();
      count++;
    }
  }
  const maxCount = Math.max(...length.slice(1));
  let result = 0;
  length.forEach((e) => {
    if (e == maxCount) {
      result++;
    }
  });
  return result;
}

const input = [
  [
    6,
    [
      [3, 6],
      [4, 3],
      [3, 2],
      [1, 3],
      [1, 2],
      [2, 4],
      [5, 2],
    ],
  ],
];
for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(...input[i])}`);
}
