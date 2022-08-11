// var isValidBST = function (root) {
//   if (!root.left && !root.right) return true;
//   if (!count(root)) {
//     console.log(root.val);
//     return false;
//   }
//   if (root.left && !root.right) {
//     if (isValidBST(root.left)) return true;
//   } else if (!root.left && root.right) {
//     if (isValidBST(root.right)) return true;
//   } else {
//     if (isValidBST(root.left) && isValidBST(root.right)) return true;
//   }
//   return false;
// };

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
 * @return {boolean}
 */

var isValidBST = function (root) {
  if (!root) return true;
  return dfs(root, -Infinity, Infinity);

  function dfs(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;

    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  }
};
