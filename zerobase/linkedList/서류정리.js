function File(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(ll) {
  let current = ll.head,
    prev = null,
    next;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    ll.head = prev;
  }

  return ll;
}

let input = [
  [7, 3, 1],
  [4, 6, 9, 1, 3],
  [3, 4, 1, 2, 7, 9, 6],
];

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number}->`);
  }
  console.log('null');
};

LinkedList.prototype.makeFiles = function (files) {
  let current = this.head;
  let node;
  for (let i = 0; i < files.length; i++) {
    node = new File(files[i]);
    node.next = current;
    this.head = node;

    current = node;
  }
};

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}/`);

  let ll = new LinkedList();
  ll.makeFiles(input[i]);

  answer(ll).printNode();
}
