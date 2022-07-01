var flatten = function (root) {
  let nextOne = null;

  const update = (node) => {
    if (!node) return node;

    update(node.right);
    update(node.left);
    node.right = nextOne;
    node.left = null;
    nextOne = node;
  };

  update(root);
};
