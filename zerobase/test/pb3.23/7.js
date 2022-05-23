function solution(n) {
  let count = 0;
  let result = [];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= Math.floor(n / 2); j++) {
      if (1 * i + 2 * j === n) {
        count++;
        result.push([i, j]);
      }
    }
  }
  let answer = 0;
  console.log(result);
  result.forEach(
    (item) =>
      (answer +=
        factorial(item[0] + item[1]) /
        (factorial(item[0]) * factorial(item[1])))
  );
  return answer;
}

function factorial(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    num *= i;
  }
  return num;
}

console.log(solution(3));
