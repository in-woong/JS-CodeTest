function solution(s) {
  if (!s.split('').includes('X') || !s.split('').includes('Y')) {
    return s;
  }
  let xIndex = Number.MAX_SAFE_INTEGER;
  let yIndex = Number.MIN_SAFE_INTEGER;
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'X') {
      xIndex = i < xIndex ? i : xIndex;
    } else if (s[i] == 'Y') {
      yIndex = i > yIndex ? i : yIndex;
    }
  }

  answer =
    s.slice(0, xIndex) +
    s
      .slice(xIndex, yIndex + 1)
      .split('')
      .reverse()
      .join('') +
    s.slice(yIndex + 1);
  return answer;
}

const input = ['ooX', 'XXYY', 'XCAXY', 'YYAAY', 'YXYXX'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
