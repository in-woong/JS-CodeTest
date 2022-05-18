function Queue() {
  this.queue = [];
  this.front = 0;
  this.rear = 0;
}

Queue.prototype.enqueue = function (element) {
  this.queue[this.rear++] = element;
};

Queue.prototype.dequeue = function () {
  const element = this.queue[this.front];
  delete this.queue[this.front++];
  return element;
};

Queue.prototype.pop = function () {
  const element = this.queue[this.rear - 1];
  delete this.queue[this.rear - 1];
  this.rear--;
  return element;
};

Queue.prototype.first = function () {
  return this.queue[this.front];
};

Queue.prototype.last = function () {
  return this.queue[this.rear - 1];
};

Queue.prototype.size = function () {
  return this.rear - this.front;
};

Queue.prototype.isEmpty = function () {
  return this.size() === 0;
};
Queue.prototype.slice = function () {
  return this.queue.slice();
};

function solution(people, limit) {
  let count = 0;

  people.sort((a, b) => b - a);
  const queue = new Queue();
  for (let i = 0; i < people.length; i++) {
    queue.enqueue(people[i]);
  }
  while (!queue.isEmpty()) {
    if (queue.size() == 1) {
      return ++count;
    }
    if (queue.first() + queue.last() > limit) {
      queue.dequeue();
    } else {
      queue.dequeue();
      queue.pop();
    }
    count++;
  }
  //   while (people.length) {
  //     if (people[0] + people[people.length - 1] > limit) {
  //       people.shift();

  //       count++;
  //     } else {
  //       people.shift();
  //       people.pop();
  //       count++;
  //     }
  //   }

  return count;
}

const input = [
  [[70, 50, 80, 50], 100],
  [[70, 80, 50], 100],
  [[40, 50, 150, 160], 200],
  [[100, 500, 500, 900, 950], 1000],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
