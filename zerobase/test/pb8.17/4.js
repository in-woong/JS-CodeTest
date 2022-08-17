function solution(array) {
  let oddNum = 0;
  const arr = Array.from({ length: 10 }, () => 0);
  const set = Array.from(new Set(array));
  for (let i = 0; i < array.length; i++) {
    arr[array[i]] = arr[array[i]] + 1;
  }

  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 2 && i % 2) {
      temp++;
    }
  }

  const n = set.length;

  for (let i = 0; i < n; i++) {
    if (set[i] % 2) oddNum++;
  }

  return (n - 1) * oddNum + temp;
}
