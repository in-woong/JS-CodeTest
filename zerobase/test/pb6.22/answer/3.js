function solution(n, k, theives) {
  let police = 0;
  let answer = 0;
  theives.sort((a, b) => b - a);
  for (let i = 0; i < k; i++) {
    if (police >= theives[i]) break;
    police += n - theives[i];
    answer++;
  }

  return answer;
}
