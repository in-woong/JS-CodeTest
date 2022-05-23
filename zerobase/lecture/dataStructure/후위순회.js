function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.root = null;
}

BinaryTree.prototype._insert = function (node, value) {
  if (node === null) {
    node = new Node(value);
  } else if (node.value >= value) {
    node.left = this._insert(node.left, value);
  } else if (node.value < value) {
    node.right = this._insert(node.right, value);
  }
  return node;
};

BinaryTree.prototype.insert = function (value) {
  this.root = this._insert(this.root, value);
};

BinaryTree.prototype._postOrder = function (node, callback) {
  if (node === null) return;

  this._postOrder(node.left, callback);
  this._postOrder(node.right, callback);
  callback(node);
};

BinaryTree.prototype.postOrder = function (callback) {
  this._postOrder(this.root, callback);
};

function answer(str) {
  let result = [];
  let tree = new BinaryTree();
  for (let s of str.split('')) {
    tree.insert(s);
  }

  const doIt = (node) => {
    result.push(node.value);
  };

  tree.postOrder(doIt);

  return result;
}

let input = ['ABC', 'FBADCEGIH', 'CBAEDFG'];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
