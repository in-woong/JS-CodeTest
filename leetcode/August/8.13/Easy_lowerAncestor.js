var lowestCommonAncestor = function (root, p, q) {
  const pAnces = countAncestor(root, p, []);
  const qAnces = countAncestor(root, q, []);

  let len = pAnces.length < qAnces.length ? pAnces.length : qAnces.length;

  let ans = -1;
  for (let i = 0; i < len; i++) {
    if (pAnces[i] == qAnces[i]) ans = pAnces[i];
  }

  return ans;
};

function countAncestor(node, target, ances) {
  if (!node) return;

  if (node.val == target.val) return [...ances, node];

  return (
    countAncestor(node.left, target, [...ances, node]) ||
    countAncestor(node.right, target, [...ances, node])
  );
}
