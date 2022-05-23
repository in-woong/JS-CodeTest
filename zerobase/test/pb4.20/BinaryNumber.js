function solution(n){
    return n.toString(2)

}

const input = [
    5,1,29284,9438293,326,84237182
  ];
  
  for (let i = 0; i < input.length; i++) {
    console.log(`${i + 1} ${solution(input[i])}`);
  }
  
  