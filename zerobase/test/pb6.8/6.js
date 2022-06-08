function solution(arr) {
  let answer = 101;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) < Math.abs(answer)) {
      answer = arr[i];
    } else if (Math.abs(arr[i]) === Math.abs(answer)) {
      answer = arr[i] < answer ? arr[i] : answer;
    }
  }
  return answer;
}

const input = [[-5, 4, 3, -1, 2]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
