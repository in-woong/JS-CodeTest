var isCousins = function(root, x, y) {
    function findDepth(node, target, depth){
       if(node.val ==target)return depth;
        if(node.left && findDepth(node.left, target,depth+1))return findDepth(node.left, target,depth+1)
        if(node.right && findDepth(node.right, target,depth+1))return findDepth(node.right, target, depth+1)
    }
    function findParent(node,target, parent){
        
        if(node.val==target)return parent;
        if(node.left && findParent(node.left, target, node.val)) return findParent(node.left, target,node.val);
        if(node.right && findParent(node.right, target, node.val))return findParent(node.right, target,node.val);
        
    }
    
    const xDepth= findDepth(root, x, 1);
    const yDepth= findDepth(root, y, 1);
    const xParent = findParent(root, x, null);
    const yParent = findParent(root,y, null);
    if(xDepth==yDepth && xParent !==yParent)return true
    return false
};

// var isCousins = function(root, x, y) {
//     const queue = [root];
//     while (queue.length) {
//       const size = queue.length;
//       let foundX = false;
//       let foundY = false;
//       // iterate through one level
//       for (let i = 0; i < size; i++) {
//         const node = queue.shift();
//         // check if children are x and y
//         if (node.left && node.right) {
//           if (
//             (node.left.val === x && node.right.val === y) ||
//             (node.left.val === y && node.right.val === x)
//           )
//             return false;
//         }
//         // find x and y at the same level
//         if (node.val === x) foundX = true;
//         if (node.val === y) foundY = true;
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//       }
//       if (foundX && foundY) return true;
//     }
//     return false;
//   };