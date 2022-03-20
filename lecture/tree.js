//이진 트리(Array)
//0번 인덱스는 편의를 위해 비워둔다.
//Left = Index *2
//Right = Index *2 + 1
//Parent = floor(Index /2)
const tree = [
  undefined,
  //1
  9,
  //1*2, 1*2+1
  3,
  8,
  //2*2, 2*2+1, 3*2, 3*2+1
  2,
  5,
  undefined,
  7,
  // 4*2, 4*2+1, 5*2, 5*2+1
  undefined,
  4,
  undefined,
  undefined,
];

//이진 트리 (Linked List)
class Queue {
    constructor() {
      this.queue = [];
      this.front = 0;
      this.rear = 0;
    }
  
    enqueue(value) {
      this.queue[this.rear++] = value;
    }
    dequeue() {
      const value = this.queue[this.front];
      delete this.queue[this.front];
      this.front += 1;
      return value;
    }
  
    peek() {
      return this.queue[this.front];
    }
  
    size() {
      return this.rear - this.front;
    }
  }
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }
  display() {
    //Level Order
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const treeList = new Tree(new Node(9));
treeList.root.left = new Node(3);
treeList.root.right= new Node(8);
treeList.root.left.left = new Node(2);
treeList.root.left.right = new Node(5);
treeList.root.right.right = new Node(7);
treeList.root.left.right.right = new Node(4);
treeList.display()