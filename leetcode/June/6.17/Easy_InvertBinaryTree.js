function solution(root) {
  invert(root);
  return root;
}

function invert(node) {
  if (!node) return;
  if (node.left !== null && node.right !== null) {
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  } else if (node.left == null && node.right !== null) {
    const temp = null;
    node.left = node.right;
    node.right = null;
  } else if (node.right == null && node.left !== null) {
    const temp = null;
    node.right = node.left;
    node.left = null;
  }
  invert(node.left);
  invert(node.right);
}

const input = [];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
