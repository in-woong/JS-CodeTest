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
class MinHeap {
  constructor() {
    this.items = [];
  }
  swap = (index1, index2) => {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  };

  parentIndex = (index) => {
    return Math.floor((index - 1) / 2);
  };

  leftChildIndex = (index) => {
    return index * 2 + 1;
  };

  rightChildIndex = (index) => {
    return index * 2 + 2;
  };

  parent = (index) => {
    return this.items[this.parentIndex(index)];
  };

  leftChild = (index) => {
    return this.items[this.leftChildIndex(index)];
  };

  rightChild = (index) => {
    return this.items[this.rightChildIndex(index)];
  };

  peek = () => {
    return this.items[0];
  };

  size = () => {
    return this.items.length;
  };

  insert = (item) => {
    this.items[this.size()] = item;
    this.bubbleUp();
  };

  extract = () => {
    let item = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
  };

  bubbleUp = () => {
    let index = this.size() - 1;
    while (this.parent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.parentIndex[index], index);
      index = this.parentIndex[index];
    }
  };

  bubbleDown = () => {
    let index = 0;
    while (
      this.leftChild(index) &&
      (this.leftChild(index) < this.items[index] ||
        this.rightChild(index) < this.items[index])
    ) {
      let childIndex = this.leftChildIndex[index];
      if (
        this.rightChild(index) &&
        this.rightChild(index) < this.items[childIndex]
      ) {
        childIndex = this.rightChildIndex(index);
      }
      this.swap(childIndex, index);
      index = childIndex;
    }
  };
}
