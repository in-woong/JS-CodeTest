function solution(root) {
    if (!root) return null;
    const queue = [root];
  
    while (queue.length) {
      const size = queue.length;
      const level = queue.slice();
      
      for (let i = 0; i < size; i++) {
        
        const currentNode = queue.shift();
        currentNode.next = level[i + 1]??null;
        
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }
      return root
  }

const input = [];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
