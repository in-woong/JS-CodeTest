// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

function solution(p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p || !q || p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const input = [];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
