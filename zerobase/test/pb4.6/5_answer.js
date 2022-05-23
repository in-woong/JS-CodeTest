function solution(A) {
  let change = 0;
  const moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
  for (let i = 0; i < moneys.length; i++) {
    change += Math.floor(A / moneys[i]);
    A %= moneys[i];
  }
  return change;
}
