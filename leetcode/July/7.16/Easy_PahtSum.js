var hasPathSum = function (root, targetSum) {
  let answer = false;
  function sumCount(node, sum) {
    sum += node.val;
    if (node.left) {
      sumCount(node.left, sum);
    }
    if (node.right) {
      sumCount(node.right, sum);
    }
    if (!node.left && !node.right) {
      if (sum === targetSum) answer = true;
    }
  }
  if (root) {
    sumCount(root, 0);
  }

  return answer;
};
