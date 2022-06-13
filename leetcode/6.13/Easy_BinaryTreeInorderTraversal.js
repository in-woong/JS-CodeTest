function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function solution(root) {
  let result = [];
  dfs(root);

  function dfs(root) {
    console.log(root, root != null, result);
    if (root != null) {
      dfs(root.left);
      result.push(root.val);
      dfs(root.right);
    }
  }
  return result;
}

const input = [[1, null, 2, 3], [], [1]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
