function solution(n, works) {
  //works에서 어디서 -총 n만큼 빼면,
  works.sort((a, b) => a - b);
  while (n !== 0 && check(works)) {
    works[works.length - 1]--;
    works.sort((a, b) => a - b);
    n--;
  }

  return answer(works);
}
function check(works) {
  let bool = false;
  for (const work of works) {
    if (work > 0) bool = true;
  }
  return bool;
}
function answer(works) {
  let a = 0;
  for (const work of works) {
    a += work ** 2;
  }

  return a;
}

function solution(n, works) {
  if (works.reduce((a, b) => a + b) <= n) return 0;

  let sorted = works.sort((a, b) => a - b);
  const len = works.length;

  while (n) {
    const max = sorted[len - 1];

    for (let i = len - 1; i >= 0; i--) {
      if (sorted[i] >= max) {
        sorted[i]--;
        n--;
      }
      if (!n) break;
    }
  }

  return sorted.reduce((a, b) => a + Math.pow(b, 2), 0);
}
