function Queue() {
  this.array = [];
  this.front = 0;
  this.rear = 0;
}

Queue.prototype.enqueue = function (v) {
  this.array.push(v);
  this.rear++;
};

Queue.prototype.dequeue = function () {
  this.front++;
  return this.array.shift();
};

Queue.prototype.length = function () {
  return this.rear - this.front;
};

Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

function Graph() {
  this.array = [];
  this.visited = [];
}
Graph.prototype.addVertex = function (v) {
  this.array[v] = [];
  this.visited[v] = false;
};

Graph.prototype.addEdge = function (v1, v2) {
  this.array[v1].push(v2);
  this.array[v2].push(v1);
};

Graph.prototype._bfs = function (v) {
  let queue = new Queue();
  let count = 0;
  queue.enqueue(v);

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();
    if (this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    console.log(`visit ${vertex}`);
    count++;

    let neighbors = this.array[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      queue.enqueue(neighbors[i]);
    }
  }
  return count;
};
Graph.prototype.bfs = function (startVertex) {
  return this._bfs(startVertex);
};

function answer(v, e_list) {
  let result = 0;
  let graph = new Graph();
  for (let i = 1; i <= v; i++) {
    graph.addVertex(i);
  }
  for (let i = 0; i < e_list.length; i++) {
    graph.addEdge(e_list[i][0], e_list[i][1]);
  }
  return graph.bfs(1);
}

let input = [
  [
    7,
    [
      [1, 2],
      [2, 3],
      [1, 5],
      [1, 5],
      [5, 2],
      [5, 6],
      [4, 7],
    ],
  ],
  [
    10,
    [
      [8, 6],
      [5, 7],
      [9, 10],
      [7, 4],
      [1, 8],
      [5, 10],
      [7, 2],
    ],
  ],
  [
    10,
    [
      [6, 9],
      [9, 4],
      [4, 8],
      [9, 7],
      [6, 8],
      [10, 1],
      [10, 9],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1]));
}
