class Dequeue {
  constructor(array = []) {
    this.array = array;
    this.head = 0;
    this.tail = 0;
  }
  isEmpty() {
    return this.array.length === 0;
  }
  push_front(element) {
    return this.array.unshift(element);
  }
  push_back(element) {
    return this.array.push(element);
  }
  pop_front() {
    if (this.isEmpty()) return -1;
    return this.array.shift();
  }
  pop_back() {
    if (this.isEmpty()) return -1;
    return this.array.pop();
  }
  size() {
    return this.array.length;
  }
  front() {
    if (this.isEmpty()) return -1;
    return this.array[0];
  }
  back() {
    if (this.isEmpty()) return -1;
    return this.array[this.array.length - 1];
  }
}

function answer(cmds) {
  let result = [];
  const dq = new Dequeue();
  for (let i = 0; i < cmds.length; i++) {
    switch (cmds[i].split(' ')[0]) {
      case 'push_front':
        dq.push_front(cmds[i].split(' ')[1]);
        break;
      case 'push_back':
        dq.push_back(cmds[i].split(' ')[1]);
        break;
      case 'pop_front':
        result.push(Number(dq.pop_front()));
        break;
      case 'pop_back':
        result.push(Number(dq.pop_back()));
        break;
      case 'empty':
        result.push(dq.isEmpty() ? 1 : 0);
        break;
      case 'size':
        result.push(dq.size());
        break;
      case 'front':
        result.push(Number(dq.front()));
        break;
      case 'back':
        result.push(Number(dq.back()));
        break;
    }
  }

  return result;
}

let input = [
  ['push_back 1', 'push_front 2', 'pop_front', 'pop_back', 'pop_front'],
  [
    'push_back 3',
    'push_front 4',
    'push_back 5',
    'push_front 6',
    'front',
    'back',
    'pop_front',
    'size',
    'empty',
  ],
  [
    'push_back 7',
    'push_front 8',
    'front',
    'back',
    'size',
    'empty',
    'pop_front',
    'pop_back',
    'pop_front',
    'size',
    'empty',
    'pop_back',
    'pop_front9',
    'empty',
    'front',
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
