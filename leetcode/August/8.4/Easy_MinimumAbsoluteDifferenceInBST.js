// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var getMinimumDifference = function (root) {
//   const array = [];
//   function getElement(node) {
//     array.push(node.val);
//     if (node.left) getElement(node.left);
//     if (node.right) getElement(node.right);
//   }

//   getElement(root);
//   let answer = Infinity;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       answer = Math.min(answer, Math.abs(array[i] - array[j]));
//     }
//   }
//   return answer;
// };

var getMinimumDifference = function(root) {
    let min = Number.MAX_SAFE_INTEGER;
    let prev = new TreeNode(Number.MIN_SAFE_INTEGER);
    const dfs = (node) => {

        if(!node) return;
                  console.log(prev.val, node.val)
        dfs(node.left);
      
        min = Math.min((node.val - prev.val), min);
        console.log("min",min, node.val)
        prev = node;
        dfs(node.right);
    }
    dfs(root);
    return min;
};
