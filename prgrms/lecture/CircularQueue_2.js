const DEFAULT_SIZE = 5;

function CircularQueue(array = [], size = DEFAULT_SIZE) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};

CircularQueue.prototype.isEmpty = function () {
  return this.length === 0;
};

CircularQueue.prototype.isFull = function () {
  return this.length == this.size;
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

CircularQueue.prototype.front = function () {
  return this.length === 0 ? undefined : this.array[this.head];
};

CircularQueue.prototype.dataSize = function () {
  return this.length;
};

CircularQueue.prototype.clear = function (size = DEFAULT_SIZE) {
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
};

const cq = new CircularQueue([1, 2, 3]);
console.log(cq.isEmpty());
console.log(cq.isFull());
console.log(cq.enqueue(4));
console.log(cq.dequeue());
