var buildTree = function (inorder, postorder) {
  function callArr(arr) {
    if (!arr.length) return null;
    const value = postorder.pop();
    const idx = arr.indexOf(value);
    const node = new TreeNode(value);
    node.right = callArr(arr.slice(idx + 1));
    node.left = callArr(arr.slice(0, idx));

    return node;
  }
  return callArr(inorder);
};
