function solution(p) {
  if (p.length === 0) return p;
  let count = 0;
  let isURight = true;
  for (let i = 0; i < p.length; i++) {
    count = p[i] === '(' ? count + 1 : count - 1;
    if (count < 0) isURight = false;
    if (count === 0) {
      const [u, v] = [p.slice(0, i + 1), p.slice(i + 1)];
      console.log('slice', 'u', u, 'v', v);
      if (isURight) {
        return u + solution(v);
      } else {
        let emptyString = '(' + solution(v) + ')';
        const slicedReversedString = u
          .slice(1, u.length - 1)
          .split('')
          .map((bracket) => (bracket === '(' ? ')' : '('))
          .join('');
        console.log('DDDD', emptyString, slicedReversedString);
        return emptyString + slicedReversedString;
      }
    }
  }
}
function reverse(str) {
  return str
    .slice(1, str.length - 1)
    .split('')
    .map((c) => (c === '(' ? ')' : '('))
    .join('');
}

function solution(p) {
  if (p.length < 1) return '';
  let balance = 0;
  let pivot = 0;

  do {
    balance += p[pivot++] === '(' ? 1 : -1;
  } while (balance !== 0);

  const u = p.slice(0, pivot);
  const v = solution(p.slice(pivot, p.length));

  if (u[0] === '(' && u[u.length - 1] == ')') return u + v;
  else return '(' + v + ')' + reverse(u);
}
const input = ['(()())()', ')(', '()))((()'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
