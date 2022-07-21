function solution(numbers) {
  //모든 값을 홀수로 만들면 우승
  let n = numbers.length;
  let oddFlag = 0;
  //홀수가 있는지 확인
  for (let j = 0; j < n; j++) {
    if (numbers[j] % 2 !== 0) {
      oddFlag = 1;
      break;
    }
  }
  let cnt = 0;
  if (oddFlag) {
    for (let j = 0; j < n; j++) {
      //짝수의 개수 확인
      if (numbers[j] % 2 === 0) cnt++;
    }
  } else {
    let tmp = Array.from({ length: n }).fill(0);
    for (let j = 0; j < n; j++) {
      for (let k = 0; ; k++) {
        //짝수에대해서 홀수가 될때까지 나눌려면 몇번이 걸리나
        if (numbers[j] % 2 != 0) break;
        numbers[j] = numbers[j] / 2;
        tmp[j]++;
      }
    }
    //  짝수+짝수는 짝수이고 짝수를 다 더해서 홀수만 더해주면 홀수가 나옴
    cnt = Math.min(...tmp) + numbers.length - 1;
  }

  return cnt;
}

const input = [
  [1049600, 33792, 1280],
  [2, 2, 6, 6, 5],
  [6, 4, 5, 6, 4],
  [6, 7, 3, 1, 6],
  [4, 3, 4, 2, 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
