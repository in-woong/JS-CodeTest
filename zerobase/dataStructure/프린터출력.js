class Queue {
  constructor() {
    this.array = [];
  }
  getBuffer() {
    return this.array.slice();
  }
  enqueue(element) {
    this.array.push(element);
  }
  dequeue() {
    return this.array.shift();
  }
  peek() {
    return this.array[0];
  }
  isEmpty() {
    return this.array.length === 0;
  }
  max() {
    return Math.max(...this.array);
  }
}

function answer(priorities, select) {
  let result = -1;
  const pq = new Queue();
  const vq = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    pq.enqueue(priorities[i]);
    vq.enqueue(i);
  }
  let count = 0;
  while (!pq.isEmpty()) {
    max = pq.max();
    if (max === pq.peek()) {
      count++;
      if (select === vq.peek()) {
        result= count;
        break;
      } else {
        pq.dequeue();
        vq.dequeue();
      }
    } else {
      pq.enqueue(pq.dequeue());
      vq.enqueue(vq.dequeue());
    }
  }
  return result;
}

let input = [
  [[3], 0],
  [[3, 4, 5, 6], 2],
  [[1, 1, 5, 1, 1, 1], 0],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(...input[i]));
}
