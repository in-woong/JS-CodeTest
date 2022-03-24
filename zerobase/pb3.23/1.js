function solution(num) {
  result = [];
  const absNum = Math.abs(num);
  const number = absNum.toString().split('');

  for (let i = number.length - 1; i >= 0; i--) {
    result.push(number[i]);
  }
  const answer = parseInt(result.join(''), 10);
  if (answer > 1000000) return 0;
  if (num > 0) {
    return answer;
  } else {
    return -answer;
  }
}

console.log(solution(-10000000009));
