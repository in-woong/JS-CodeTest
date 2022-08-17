function solution(s) {
  console.log('Z'.charCodeAt(0));
  //90
  const answerSet = new Set();
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) <= 90) {
      //대문자일 때
      if (s.includes(s[i].toLowerCase())) {
        answerSet.add(s[i]);
      }
    } else {
      //소문자일 때
      if (s.includes(s[i].toUpperCase())) {
        answerSet.add(s[i].toUpperCase());
      }
    }
  }

  const answer = Array.from(answerSet.values()).sort(
    (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  );
  if (answer.length == 0) return '';
  return answer[answer.length - 1];
}
