function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => a - b);
  while (score.length >= m) {
    let box = [];
    for (let i = 0; i < m; i++) {
      box.push(score.pop());
    }
    answer += Math.min(...box) * m;
  }
  return answer;
}
