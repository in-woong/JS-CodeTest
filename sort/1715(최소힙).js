//가장 작은것을 두개 뽑아서 합친뒤에 array에 다시 넣고, 만약 하나만 남으면 그걸 console.log 한다

// const fs = require('fs');
// const [n, ...arr] = fs
//   .readFileSync('./data')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => v * 1);

// let resultOne = 0;
// while (arr.length > 1) {
//   arr.sort((a, b) => b - a);
//   const one = arr.pop();
//   const two = arr.pop();
//   const compareOne = one + two;
//   resultOne += compareOne;
//   arr.push(compareOne);
// }
// console.log(resultOne);

function MinHeap() {
  this.heap = [0];
  this.insert = (v) => {
    this.heap.push(v);
    let p = this.heap.length - 1;
    while (p > 1 && this.heap[Math.floor(p / 2)] > this.heap[p]) {
      let tmp = this.heap[Math.floor(p / 2)];
      this.heap[Math.floor(p / 2)] = this.heap[p];
      this.heap[p] = tmp;
      p = Math.floor(p / 2);
    }
  };
  this.getLength = () => {
    return this.heap.length;
  };
  this.delete = () => {
    if (this.heap.length - 1 < 1) {
      return 0;
    }
    let deletedItem = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let p = 1;
    while (p * 2 < this.heap.length) {
      let min = this.heap[p * 2];
      let minP = p * 2;
      if (p * 2 + 1 < this.heap.length && min > this.heap[p * 2 + 1]) {
        min = this.heap[p * 2 + 1];
        minP = p * 2 + 1;
      }
      if (this.heap[p] < min) {
        break;
      }
      let tmp = this.heap[p];
      this.heap[p] = this.heap[minP];
      this.heap[minP] = tmp;
      p = minP;
    }
    return deletedItem;
  };
}

const solution = (n, list) => {
  let cnt = 0;
  for (let i = 1; i < n; i++) {
    let card1 = list.delete();
    let card2 = list.delete();

    let sum = card1 + card2;
    cnt += sum;

    list.insert(sum);
  }
  console.log(cnt);
};

const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('./data')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v * 1);

let list = new MinHeap();
for (let i = 0; i < n; i++) {
  let tmp = Number(input.shift());
  list.insert(tmp);
}

solution(n, list);
