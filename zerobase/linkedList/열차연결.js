function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(nums) {
  let ll = new LinkedList();
  let prev, current;
  for (let i = 0; i < nums.length; i++) {
    current = new Train(nums[i]);
    if (i === 0) {
      ll.head = current;
    } else {
      prev.next = current;
    }

    prev = current;
  }

  return ll;
}

let input = [
  [4, 7, 1, 10, 6],
  [3, 10, 6, 9, 11, 3, 4],
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number}->`);
  }
  console.log('null');
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  answer(input[i]).printNode();
}
