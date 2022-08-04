function solution(arr) {
  while (arr.length > 1) {
    const n = arr.length;

    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i < n / 2) {
        if (i % 2 == 0) {
          newArr.push(Math.min(arr[i * 2], arr[i * 2 + 1]));
        } else {
          newArr.push(Math.max(arr[i * 2], arr[i * 2 + 1]));
        }
      }
    }
    console.log(newArr);
    arr = newArr;
  }
  return arr[0];
}
