function solution(arr) {
    if(arr.length==0)return -1;
    return Math.max(...arr);
}
  const input = [];
  
  for (let i = 0; i < input.length; i++) {
    console.log(`${i + 1}: ${solution(input[i])}`);
  }
  