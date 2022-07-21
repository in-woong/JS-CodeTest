function solution(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(...arr[i].split(' '));
  }
  return [...new Set(array)].sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
    else return -1;
  });
}
