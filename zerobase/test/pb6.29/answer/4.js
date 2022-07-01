function solution(arr) {
  let isHeap = true;

  for (let i = 0; i < arr.length; i++) {
    if (2 * i < arr.length && arr[i] > arr[2 * i]) {
      isHeap = false;
      break;
    }
    if (2 * i + 1 < arr.length && arr[i] > arr[2 * i + 1]) {
      isHeap = false;
      break;
    }
  }

  return isHeap ? 'YES' : 'NO';
}
