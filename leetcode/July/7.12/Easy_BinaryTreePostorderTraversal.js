var postorderTraversal = function(root) {
    const answer=[];
      
      
  function count(node){
      if(!node)return;
      if(node.left)count(node.left);
      if(node.right)count(node.right);
      answer.push(node.val);
  }   
      count(root);
      
      return answer
  };
  