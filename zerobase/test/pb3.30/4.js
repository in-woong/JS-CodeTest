function solution(A) {
  let result = [];
  if(A.length ==1){
    return A[0]
  }
  for (let i = 0; i < A.length-1; i++) {
    let count = A[i];
    console.log(count, i);
    for (let j = i + 1; j < A.length; j++) {
      count += A[j];
      result.push(count);
      console.log(A[j], count, result);
    }
  }
  const max = Math.max(...result);
  if (max < 0) {
    return 0;
  }
  return max;
}

console.log(solution([2, -8, 3, -2, 4, -10]));
