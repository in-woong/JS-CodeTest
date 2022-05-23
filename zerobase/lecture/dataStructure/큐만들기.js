function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (element) {
  this.array.push(element);
};
Queue.prototype.dequeue = function () {
  if (this.array.length < 1) return -1;
  return this.array.shift();
};
Queue.prototype.front = function () {
  if (this.array.length < 1) return -1;
  return this.array[0];
};
Queue.prototype.back = function () {
  if (this.array.length < 1) return -1;
  return this.array[this.array.length - 1];
};
Queue.prototype.size = function () {
  return this.array.length;
};
Queue.prototype.empty = function () {
  return this.array.length === 0 ? 1 : 0;
};

function answer(cmds) {
  let result = [];

  let queue = new Queue();
  for (let i = 0; i < cmds.length; i++) {
    let cmd = cmds[i].split(' ')[0];

    switch (cmd) {
      case 'enqueue':
        queue.enqueue(Number(cmds[i].split(' ')[1]));
        break;
      case 'dequeue':
        result.push(queue.dequeue());
        break;
      case 'front':
        result.push(queue.front());
        break;
      case 'back':
        result.push(queue.back());
        break;
      case 'size':
        result.push(queue.size());
        break;
      case 'empty':
        result.push(queue.empty());
        break;
      default:
        console.log('Error');
        break;
    }
  }

  return result;
}

let input = [
  ['enqueue 1', 'enqueue 2', 'dequeue', 'dequeue', 'dequeue'],
  [
    'enqueue 3',
    'enqueue 4',
    'enqueue 5',
    'enqueue 6',
    'front',
    'back',
    'dequeue',
    'size',
    'empty',
  ],
  [
    'enqueue 7',
    'enqueue 8',
    'front',
    'back',
    'size',
    'empty',
    'dequeue',
    'dequeue',
    'dequeue',
    'size',
    'empty',
    'dequeue',
    'enqueue 9',
    'empty',
    'front',
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
