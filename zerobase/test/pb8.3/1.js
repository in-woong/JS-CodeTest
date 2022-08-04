function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    answer += count(i);
  }
  return answer;
}
function count(num) {
  const array = num.toString(2).split('');

  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == '1') answer++;
  }
  return answer;
}
