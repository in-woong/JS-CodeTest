function solution(N, K) {
  let arr = [];
  for (let i = 1; i <= N; i++) {
    if (i - K <= N && i - K > 0) arr[i] = i - K;
    else if (K + i <= N) {
      arr[i] = K + i;
    } else {
      return [-1];
    }
  }
  arr.shift();
  return arr
  
}

const input = [[4, 2]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1])}`);
}
