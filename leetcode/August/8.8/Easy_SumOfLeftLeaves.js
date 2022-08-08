/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  count(root, false);
  return sum;

  function count(node, bool) {
    if (node.left) {
      count(node.left, true);
    }
    if (node.right) {
      count(node.right, false);
    }
    if (bool && !node.left && !node.right) {
      sum += node.val;
    }
  }
};
