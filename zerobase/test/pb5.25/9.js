function solution(A, K) {
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      
      if (sum(A, i, j) % K == 0) {
        max++;
      }
    }
  }
  return max;
}

function sum(arr, start, end) {
  if (start == end) {
    return arr[start];
  } else {
    return arr.slice(start, end + 1).reduce((acc, cur) => acc + cur);
  }
}

const input = [[[1, 2, 3, 4, 5, 6], 4]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
