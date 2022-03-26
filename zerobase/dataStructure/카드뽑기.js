class CircularQueue {
  constructor(array = [], size = DEFALT_SIZE) {
    this.array = array;
    this.size = array.length > size ? array.length : size;
    this.length = this.array.length;
    this.head = 0;
    this.tail = array.length;
  }

  getBuffer() {
    return this.array.slice();
  }
  isEmtpy() {
    return this.length === 0;
  }
  isFull() {
    return this.length == this.size;
  }
  enqueue(element) {
    if (this.isFull()) return false;
    this.array[this.tail] = element;
    this.tail = (this.tail + 1) % this.size;
    this.length++;
    return true;
  }
  dequeue() {
    if (this.isEmtpy()) return undefined;

    let element = this.array[this.head];
    delete this.array[this.head];
    this.head = (this.head + 1) % this.size;
    this.length--;

    return element;
  }
}

function answer(n) {
  let result = [];
  const circle = new CircularQueue([], n);
  for (let i = 1; i <= n; i++) {
    circle.enqueue(i);
  }
  for (let j = 0; j < n; j++) {
    result.push(circle.dequeue());
    circle.enqueue(circle.dequeue());
  }

  return result;
}

let input = [4, 7, 10];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}

const DEFALT_SIZE = 5;
