function solution(arr) {
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].length;
    max = max < temp ? temp : max;
  }
  for (let i = 1; i <= max; i++) {
    const set = new Set();
    for (let j = 0; j < arr.length; j++) {
      set.add(arr[j].slice(0, i));
    }
    if (set.size == arr.length) return i;
  }
}
