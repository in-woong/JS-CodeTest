function solution(s) {
  const answer = Array.from({ length: s.length }, () => -1);
  const map = new Map();
  for (let i = 0; i < s.length; i += 1) {
    if (map.has(s[i])) {
      answer[i] = i - map.get(s[i]);
    } else {
      answer[i] = -1;
    }
    map.set(s[i], i);
  }
  return answer;
}
