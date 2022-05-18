function solution(p, s) {
  const words = s.split(' ');
  const map = new Map();

  if (words.length !== p.length) return false;
  if (new Set(words).size !== new Set(p).size) return false;

  for (let i = 0; i < p.length; i++) {
    if (map.has(p[i]) && map.get(p[i]) !== words[i]) return false;
    map.set(p[i], words[i]);
  }
  return true;
}

const input = [['가나다라', '바나나 드래곤 스리랑카 오염']];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
