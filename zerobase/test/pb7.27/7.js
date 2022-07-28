function solution(l) {
  let answer = 0;
  for (let i = 0; i < l.length; i++) {
    const standard = l[i];
    let temp = 0;
    for (let j = i; j < l.length; j++) {
      if (l[j] >= standard) {
        temp += standard;
      } else break;
    }
    answer = answer < temp ? temp : answer;
  }
  return answer;
}
