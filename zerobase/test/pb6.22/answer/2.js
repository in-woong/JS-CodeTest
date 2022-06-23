function solution(plans) {
  let answer = 0;

  for (let i = plans.length - 2; i >= 0; i--) {
    if (plans[i + 1] === 0) {
      return -1;
    }
    while (plans[i] >= plans[i + 1]) {
      answer++;
      plans[i] = Math.floor(plans[i] / 2);
    }
  }
  return answer;
}
