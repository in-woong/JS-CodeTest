import { Queue } from './Queue.mjs';
import { Stack } from './stack.mjs';

function Graph() {
  this.edge = [];
  this.visited = [];
}

Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
  this.visited[v] = false;
};

Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
};

Graph.prototype.bfs = function (startVertex) {
  this._bfsLoopVisit(startVertex);
};

Graph.prototype._bfsLoopVisit = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();
    if (this.visited[vertex]) {
      continue;
    }
    this.visited[vertex] = true;
    console.log(`visited ${vertex}`);

    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      queue.enqueue(neighbors[i]);
    }
  }
};

Graph.prototype._bfsShortestPath = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  let distance = {};
  let pre_visit = {};

  for (let vertex in this.edge) {
    distance[vertex] = 0;
    pre_visit[vertex] = null;
  }

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      if (!this.visited[neighbors[i]]) {
        distance[neighbors[i]] = distance[vertex] + 1;
        pre_visit[neighbors[i]] = vertex;
        queue.enqueue(neighbors[i]);
      }
    }
  }
  return { distance, pre_visit };
};

Graph.prototype._from_to_path = function (pre_visit, from, to) {
  let stack = new Stack();
  for (let v = to; v !== from; v = pre_visit[v]) {
    stack.push(v);
  }
  stack.push(from);

  while (!stack.isEmpty()) {
    let v = stack.pop();
    process.stdout.write(`${v} -> `);
  }
  console.log('end');
};

Graph.prototype.shortestPath = function (startVertex) {
  let result = this._bfsShortestPath(startVertex);
  console.log(result.distance, 'result');
  console.log(result.pre_visit, 'result');
  console.log(this.edge, 'edge');
  for (let vertex in this.edge) {
    console.log(vertex, 'vertex');
    if (vertex === startVertex) continue;

    this._from_to_path(result.pre_visit, startVertex, vertex);
  }
};

let graph = new Graph();
let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
console.log('------------------');

graph.shortestPath('A');
