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
