var maxDepth = function (root) {
  let count = 0;
  const answer = depth(root, count);
  return answer;
};

function depth(node, count) {
  if (!node) return count;
  count++;
  const left = depth(node.left, count);
  const right = depth(node.right, count);
  const answer = left < right ? right : left;
  return answer;
}
