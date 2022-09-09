function Node(value, y, x) {
  this.value = value;
  this.y = y;
  this.x = x;
  this.next = undefined;
  this.prev = undefined;
}

function BinaryTree() {
  this.root = null;
}

BinaryTree.prototype._insertNode = function (node, value, y, x) {
  if (node == null) {
    node = new Node(value, y, x);
  } else if (x < node.x) {
    node.prev = this._insertNode(node.prev, value, y, x);
  } else if (x >= node.x) {
    node.next = this._insertNode(node.next, value, y, x);
  }
  return node;
};

BinaryTree.prototype._inOrderTraverseNode = function (node, answer) {
  if (node === null) {
    return;
  }
  answer.push(node.value);
  if (node.prev) this._inOrderTraverseNode(node.prev, answer);
  if (node.next) this._inOrderTraverseNode(node.next, answer);
  return answer;
};
BinaryTree.prototype._forOrderTraverseNode = function (node, answer) {
  if (node == null) return;
  if (node.prev) this._forOrderTraverseNode(node.prev, answer);
  if (node.next) this._forOrderTraverseNode(node.next, answer);
  answer.push(node.value);
  return answer;
};
BinaryTree.prototype.insert = function (value, y, x) {
  this.root = this._insertNode(this.root, value, y, x);
};
BinaryTree.prototype.inOrderTraverse = function () {
  return this._inOrderTraverseNode(this.root, []);
};
BinaryTree.prototype.forOrderTraverse = function () {
  return this._forOrderTraverseNode(this.root, []);
};

function solution(nodeinfo) {
  const sortedNodeinfo = nodeinfo.slice().sort((a, b) => b[1] - a[1]);

  const tree = new BinaryTree();
  for (let i = 0; i < sortedNodeinfo.length; i++) {
    let idx = nodeinfo.indexOf(sortedNodeinfo[i]);
    const [x, y] = sortedNodeinfo[i];
    tree.insert(idx + 1, y, x);
  }
  return [tree.inOrderTraverse(), tree.forOrderTraverse()];
}
