function solution(A) {
  let result = [];
  let array = [];
  for (let i = 0; i < A.length; i++) {
    let count = 0;
    A[i]
      .toString(2)
      .split('')
      .forEach((s) => {
        if (s == 1) {
          return ++count;
        }
      });
    result.push([A[i], count]);
  }
  console.log(result);
  result
    .sort((a, b) => {
      if (a[1] > b[1]) {
        return 1;
      } else if (a[1] < b[1]) {
        return -1;
      } else {
        if (a[0] > b[0]) {
          return 1;
        } else {
          return -1;
        }
      }
    })
    .forEach((a) => array.push(a[0]));
  return array;
}

console.log(solution([0, 4, 2, 1, 3, 511]));
