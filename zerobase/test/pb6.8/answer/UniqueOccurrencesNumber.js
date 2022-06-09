function solution(arr) {
  const map = new Map();

  arr.forEach((num) => {
    map.set(num, map.get(num) ? map.get(num) + 1 : 1);
  });

  const set = new Set(map.values());
  return set.size === map.size;
}
