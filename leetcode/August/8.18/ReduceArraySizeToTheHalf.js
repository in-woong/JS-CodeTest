/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  //선택한 개수가 적어도 arr.length의 반 이상이 넘어야한다. 선택한 개수의 최소값은?
  const len = arr.length / 2;
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let n = 1;
  const values = Object.values(obj).sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
    if (sum >= len) return i + 1;
  }
};
