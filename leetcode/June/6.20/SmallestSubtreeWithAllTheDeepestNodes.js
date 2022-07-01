function subtreeWithAllDeepest(root) {
    let index = root;
    
    function getMaxDepth(node, d=0){
        if(!node)return d;
        let left = getMaxDepth(node.left, d+1);
        let right = getMaxDepth(node.right, d+1);
        return Math.max(left, right);
    }
    while(index){
        let left = getMaxDepth(index.left);
        let right= getMaxDepth(index.right);
        if(left>right){
            index=index.left;
        }else if(left<right){
            index= index.right;
        }else{
            return index;
        }
    }
    
};

const input = [];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
