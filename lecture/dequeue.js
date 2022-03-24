function Deque(array = []) {
  this.array = array;
}

Deque.prototype.getBuffer = function () {
  return this.array.slice();
};

Deque.prototype.isEmpty = function () {
  return this.array.length === 0;
};

Deque.prototype.pushFront = function (element) {
  return this.array.unshift(element);
};

Deque.prototype.pushBack = function (element) {
  return this.array.push(element);
};

Deque.prototype.popFront = function () {
  return this.array.shift();
};
Deque.prototype.popBack = function () {
  return this.array.pop();
};

Deque.prototype.front = function () {
  return this.array.length === 0 ? undefined : this.array[0];
};

Deque.prototype.front = function () {
  return this.array.length === 0
    ? undefined
    : this.array[this.array.length - 1];
};

Deque.prototype.size = function () {
  return this.array.length;
};

Deque.prototype.clear = function () {
  this.array = [];
};

let dq = new Deque([1, 2, 3]);

let data = dq.getBuffer();
console.log(data === dq.array);

console.log(data);

console.log(dq.isEmpty());
console.log(Object.getOwnPropertyDescriptors(Deque.prototype));

console.log(dq.popBack());
console.log(dq.popFront());