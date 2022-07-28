function solution(arr) {
  let answer = Infinity;
  let answerDiff = Infinity;
  for (let i = 0; i < arr.length; i++) {
    const diff = Math.abs(arr[i]);
    if (answerDiff == diff) {
      answer = answer > arr[i] ? arr[i] : answer;
    } else {
      answer = answerDiff > diff ? arr[i] : answer;
      answerDiff = answerDiff > diff ? diff : answerDiff;
    }
  }
  return answer;
}
