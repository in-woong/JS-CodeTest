//parent는 어떤집합에 속하였는지를 나타낸다.
//find 함수는 재귀함수를 통해 최상위 원소가 무엇인지 찾는다.
function find(parent, x) {
  if (parent[x] === x) {
    return x;
  }
  return (parent[x] = find(parent, parent[x]));
}
// 작은 숫자가 부모가 되도록 만든다.
function union(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);

  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}
//compare는 a와 b가 같은 집합에 속해있는지 찾는다.
function compare(parent, a, b) {
  a = find(parent, a);
  b = find(parent, b);
  return a === b;
}

function solution(n, costs) {
  let answer = 0;
  const sortedCosts = costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: n }, (_, i) => i);

  for (const [a, b, cost] of sortedCosts) {
    //부모가 같지않다 == cycle이 발생하지 않는다.
    if (!compare(parent, a, b)) {
      answer += cost;
      union(parent, a, b);
    }
  }
}
