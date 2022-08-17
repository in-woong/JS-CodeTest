function solution(s, k) {
  const n = s.length;
  let end = 0;
  for (let i = 1; i < n; i++) {
    let j = 0;
    if (!compare(i, j)) break;
    end = i;
  }

  function compare(i, j) {
    //j는 기준, i는 비교점
    if (s.charCodeAt(i) > s.charCodeAt(j)) return false;
    if (s.charCodeAt(i) == s.charCodeAt(j)) {
      return compare(i + 1, j + 1);
    }
    return true;
  }
  const string = s.slice(0, end + 1);
  const stringN = string.length;
  const len = Math.ceil(k / stringN);
  let answer = string;
  for (let i = 0; i < len; i++) {
    answer += string;
  }
  return answer.slice(0, k);
}
