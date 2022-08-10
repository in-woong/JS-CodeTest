function solution(a, b) {
  const checkA = a.split(' ').map((v) =>
    v
      .match(/\w/g)
      .map((v) => v.toLowerCase())
      .join('')
  );
  const checkB = b.split(' ').map((v) =>
    v
      .match(/\w/g)
      .map((v) => v.toLowerCase())
      .join('')
  );
  if (same(checkA, checkB)) return 'NO';

  const aArray = a
    .split(' ')
    .join('')
    .match(/\w/g)
    .map((v) => v.toString().toLowerCase())
    .sort();
  const bArray = b
    .split(' ')
    .join('')
    .match(/\w/g)
    .map((v) => v.toString().toLowerCase())
    .sort();
  if (aArray.length !== bArray.length) return 'NO';
  for (let i = 0; i < aArray.length; i++) {
    if (aArray[i] !== bArray[i]) return 'NO';
  }

  return 'YES';
}

function same(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) return true;
  }
  for (let i = 0; i < b.length; i++) {
    if (a.includes(b[i])) return true;
  }

  return false;
}
