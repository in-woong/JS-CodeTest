/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let level = 0;
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const now = queue.shift();
      const nowArray = now.children;
      for (let j = 0; j < nowArray.length; j++) {
        queue.push(nowArray[j]);
      }
    }
    level++;
  }
  return level;
};
