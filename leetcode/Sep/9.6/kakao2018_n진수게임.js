function solution(n, t, m, p) {
  //t*m번실행
  const total = t * m;
  let temp = '';
  for (let i = 0; i < total; i++) {
    temp += i.toString(n);
  }
  let answer = '';
  for (let i = 0; i < t; i++) {
    answer += temp.slice(i * m + p - 1, i * m + p).toUpperCase();
  }

  return answer;
}
