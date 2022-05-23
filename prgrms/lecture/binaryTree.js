function Queue(array) {
  this.array = array ? array : [];
}

Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.root = null;
}

BinaryTree.prototype._insertNode = function (node, value) {
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value >= node.value) {
    node.right = this._insertNode(node.right, value);
  }
  return node;
};

BinaryTree.prototype._preOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  callback(node);
  this._preOrderTraverseNode(node.left, callback);
  this._preOrderTraverseNode(node.right, callback);
};

BinaryTree.prototype._postOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  this._postOrderTraverseNode(node.left, callback);
  this._postOrderTraverseNode(node.right, callback);
  callback(node);
};

BinaryTree.prototype._inOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  this._inOrderTraverseNode(node.left, callback);
  callback(node);
  this._inOrderTraverseNode(node.right, callback);
};

BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

BinaryTree.prototype.preOrderTraverse = function (callback) {
  this._preOrderTraverseNode(this.root, callback);
};

BinaryTree.prototype.postOrderTraverse = function (callback) {
  this._postOrderTraverseNode(this.root, callback);
};

BinaryTree.prototype.inOrderTraverse = function (callback) {
  this._inOrderTraverseNode(this.root, callback);
};

BinaryTree.prototype.levelOrderTraverse = function (callback) {
  let q = new Queue();
  let node;
  q.enqueue(this.root);
  while (!q.isEmpty()) {
    node = q.dequeue();
    callback(node);
    if (node.left !== null) q.enqueue(node.left);
    if (node.right !== null) q.enqueue(node.right);
  }
};

let tree = new BinaryTree();
tree.insert('F');
tree.insert('B');
tree.insert('A');
tree.insert('D');
tree.insert('C');
tree.insert('E');
tree.insert('G');
tree.insert('I');
tree.insert('H');

console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} -> `);
}

console.log('******** Pre-Order ********');
tree.preOrderTraverse(printNode);
console.log('end');

console.log('******** Post-Order ********');
tree.postOrderTraverse(printNode);
console.log('end');

console.log('******** In-Order ********');
tree.inOrderTraverse(printNode);
console.log('end');


console.log('******** level-Order ********');
tree.levelOrderTraverse(printNode);
console.log('end');
