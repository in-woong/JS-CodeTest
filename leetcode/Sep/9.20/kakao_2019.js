function PriorityQueue() {
  this.values = [];
}

PriorityQueue.prototype.enqueue = function (val, priority) {
  this.values.push({ val, priority });
  this.sort();
};

PriorityQueue.prototype.dequeue = function () {
  return this.values.shift();
};

PriorityQueue.prototype.sort = function () {
  this.values.sort((a, b) => a.priority - b.priority);
};

function WeightedGrah() {
  this.adjacencyList = {};
}

WeightedGrah.prototype.addVertex = function (vertex) {
  if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
};

WeightedGrah.prototype.addEdge = function (srcVertex, distVertex, weight) {
  this.adjacencyList[srcVertex].push({ node: distVertex, weight });
  this.adjacencyList[distVertex].push({ node: srcVertex, weight });
};

WeightedGrah.prototype.dijkstra = function (start, finish) {
  const nodes = new PriorityQueue();
  nodes.enqueue(start, 0);

  const distances = {};
  const previous = {};
  const path = [];

  let smallest;
  // 다음과 같은 초기 상태를 만들기 위해 for문을 돌린다.
  // distances { A: 0, B: Infinity, C: Infinity, D: Infinity, E: Infinity, F: Infinity}
  // previous { A: null, B: null, C: null, D: null, E: null, F: null }
  for (const vertex in this.adjacencyList) {
    if (vertex === start) {
      distances[vertex] = 0;
    } else {
      distances[vertex] = Infinity;
    }
    previous[vertex] = null;
  }

  while (true) {
    smallest = nodes.dequeue().val;
    if (smallest === finish) {
      while (previous[smallest]) {
        path.push(smallest);
        smallest = previous[smallest];
      }
      break;
    } else {
      for (const neighbor in this.adjacencyList[smallest]) {
        const nextNode = this.adjacencyList[smallest][neighbor];

        const candidate = distances[smallest] + nextNode.weight;
        const nextNeighbor = nextNode.node;

        if (candidate < distances[nextNeighbor]) {
          distances[nextNeighbor] = candidate;
          previous[nextNeighbor] = smallest;
          nodes.enqueue(nextNeighbor, candidate);
        }
      }
    }
  }
  return [path.concat(smallest).reverse(), distances];
};

const graph = new WeightedGrah();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
console.log(graph.adjacencyList['A']['B']);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.dijkstra('A', 'E'));
