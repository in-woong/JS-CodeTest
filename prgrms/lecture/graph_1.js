function Graph() {
  this.edge = [];
}

Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
};

Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
};

Graph.prototype.removeEdge = function (v1, v2) {
  if (this.edge[v1]) {
    let idx = this.edge[v1].indexOf(v2);

    if (idx != -1) {
      this.edge[v1].splice(idx, 1);
    }
    if (this.edge[v1].length === 0) {
      delete this.edge[v1];
    }
  }
};

Graph.prototype.removeVertex = function (v) {
  if (this.edge[v] === undefined) return;

  let length = this.edge[v].length;
  let connectedVertex = [...this.edge[v]];

  for (let i = 0; i < length; i++) {
    this.removeEdge(v, connectedVertex[i]);
  }
};

Graph.prototype.sizeVertex = function () {
  return Object.keys(this.edge).length;
};

Graph.prototype.sizeEdge = function (vertex) {
  return this.edge[vertex] ? Object.keys(this.edge[vertex]).length : 0;
};

Graph.prototype.print = function () {
  for (let vertex in this.edge) {
    let neighbors = this.edge[vertex];
    if (neighbors.length == 0) continue;

    process.stdout.write(`${vertex} -> `);
    for (let j = 0; j < neighbors.length; j++) {
      process.stdout.write(`${neighbors[j]} `);
    }
    console.log('');
  }
};

let graph = new Graph();
let verticex = ['A', 'B', 'C', 'D', 'E'];

for (let i = 0; i < verticex.length; i++) {
  graph.addVertex(verticex[i]);
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

console.log(graph.edge);

graph.removeEdge('B', 'F');
graph.removeEdge('B', 'E');
console.log(graph.edge);

graph.removeVertex('B');
console.log(graph.edge);

graph.removeVertex('D');
console.log(graph.edge);

console.log(graph.sizeVertex());
console.log(graph.sizeEdge('C'));
graph.print();
