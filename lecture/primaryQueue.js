function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}

//PriorityQueue(): Element 관리를 위한 생성자 함수

function PriorityQueue() {
  this.array = [];
  this.front = 0;
  this.rear = 0;
}

PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((element) => element.data);
};

PriorityQueue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

PriorityQueue.prototype.enqueue = function (data, priority) {
  let element = new Element(data, priority);
  let added = false;
  this.rear++;

  for (let i = 0; i < this.array.length; i++) {
    if (element.priority < this.array[i].priority) {
      this.array.splice(i, 0, element);
      added = true;
      break;
    }
  }
  if (!added) {
    this.array.push(element);
  }
  return this.array;
};

PriorityQueue.prototype.dequeue = function () {
  const value = this.array[this.front];
  delete this.array[this.front];
  this.front += 1;
  return value;
};

PriorityQueue.prototype.peek = function () {
  return this.array[this.front];
};

PriorityQueue.prototype.size = function () {
  return this.rear - this.front;
};

PriorityQueue.prototype.clear = function () {
  this.array = [];
  this.front = 0;
  this.rear = 0;
};

const queue = new PriorityQueue();
queue.enqueue('Elice', 1);
queue.enqueue('Bob', 3);
queue.enqueue('TOM', 0);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.getBuffer());
queue.clear();
