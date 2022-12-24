function solution(t, p) {
  const len = p.length;
  const target = Number(p);
  let answer = 0;
  for (let i = 0; i <= t.length - len; i += 1) {
    const el = Number(
      t
        .split('')
        .slice(i, i + len)
        .join('')
    );
    if (target >= el) answer += 1;
  }

  return answer;
}
