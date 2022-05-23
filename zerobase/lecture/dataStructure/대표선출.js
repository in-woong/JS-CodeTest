function CircularQueue(array = [], size) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

CircularQueue.prototype.geBuffer = function () {
  return this.array.slice();
};
CircularQueue.prototype.isEmpty = function () {
  return this.length === 0;
};

CircularQueue.prototype.isFull = function () {
  return this.length === this.size;
};

CircularQueue.prototype.enqueue = function (element) {
  if (this.isFull()) return false;
  this.array[this.tail] = element;
  this.tail = (this.tail + 1) % this.size;
  this.length++;
  return true;
};

CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;
  let element = this.array[this.head];
  delete this.array[this.head];
  this.head = (this.head + 1) % this.size;
  this.length--;
  return element;
};

function answer(n, m, k) {
  let result = [];
  //1. linked list를 만든다.
  const lq = new CircularQueue([], n);
  for (let i = 1; i <= n; i++) {
    lq.enqueue(i);
  }
  for (let j = 1; j < m; j++) {
    lq.enqueue(lq.dequeue());
  }
  result.push(lq.dequeue());
  while (!lq.isEmpty()) {
    for (let x = 1; x < k; x++) {
      lq.enqueue(lq.dequeue());
    }
    result.push(lq.dequeue());
  }
  return result;
  //2. m번째 숫자를 제외

  //3.
}

let input = [
  [8, 2, 3],
  [10, 2, 3],
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}
