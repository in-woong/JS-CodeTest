var binaryTreePaths = function (root) {
  let answer = [root.val];

  return count(root, answer[0]);
};
function count(node, str) {
  const answer = [];
  if (node.val && !node.left && !node.right) {
    console.log(node.val, str);
    return [`${str}`];
  }

  if (node.left) {
    console.log('left', node.left);
    let left = str + '->';
    left += node.left.val;
    let temp = count(node.left, left);
    answer.push(...temp);
  }
  if (node.right) {
    console.log('right', node.right);
    let right = str + '->';
    right += node.right.val;
    let temp = count(node.right, right);
    answer.push(...temp);
  }
  console.log(node.val, str, answer);
  return answer;
}

var binaryTreePaths = function (root) {
  let result = [];
  traverse(root, '');

  function traverse(node, path) {
    if (!node) return;

    if (!node.left && !node.right) {
      result.push(path + node.val);
      return;
    }
    traverse(node.left, path + node.val + '->');
    traverse(node.right, path + node.val + '->');
  }
  return result;
};
