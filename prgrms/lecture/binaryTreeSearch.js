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

BinaryTree.prototype._inOrderTraverseNode = function (node, callback) {
  if (node === null) {
    return;
  }
  this._inOrderTraverseNode(node.left, callback);
  callback(node);
  this._inOrderTraverseNode(node.right, callback);
};

BinaryTree.prototype._minNode = function (node) {
  if (node === null) {
    return null;
  }

  while (node && node.left !== null) {
    node = node.left;
  }

  return node.value;
};

BinaryTree.prototype._maxNode = function (node) {
  if (node === null) {
    return null;
  }

  while (node && node.right !== null) {
    node = node.right;
  }
  return node.value;
};

BinaryTree.prototype._searchNode = function (node, value) {
  if (node === null) {
    return false;
  }

  if (node.value === value) {
    return true;
  } else if (node.value > value) {
    return this._searchNode(node.left, value);
  } else if (node.value < value) {
    return this._searchNode(node.right, value);
  }
};

BinaryTree.prototype._findMinNode = function (node) {
  while (node && node.left !== null) {
    node = node.left;
  }
  return node;
};

BinaryTree.prototype._removeNode = function(node, value){
    if(node ===null){
        return null
    }
    if(node.value === value){
        if(node.left === null && node.right ===null){
            node = null;
        }else if (node.left ===null){
            node=node.right;
        }else if (node.right ===null){
            node=node.left;
        }else{
            let aux = this._findMinNode(node.right);
            node.value = aux.value;
            node.right = this._removeNode(node.right, aux.value);
        }
    }else if (node.value>value){
        node.left = this._removeNode(node.left, value);
    }else if (node.value < value){
        node.right = this._removeNode(node.right, value);
    }
    return node
}

BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

BinaryTree.prototype.inOrderTraverse = function (callback) {
  this._inOrderTraverseNode(this.root, callback);
};

BinaryTree.prototype.min = function () {
  return this._minNode(this.root);
};

BinaryTree.prototype.max = function () {
  return this._maxNode(this.root);
};

BinaryTree.prototype.search = function (value) {
  return this._searchNode(this.root, value);
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

console.log('******** In-Order ********');
tree.inOrderTraverse(printNode);
console.log('end');

console.log(tree.min());
console.log(tree.max());

console.log(tree.search('J') ? 'Found I' : 'Not found J');
console.log(tree.search('I') ? 'Found I' : 'Not found J');
