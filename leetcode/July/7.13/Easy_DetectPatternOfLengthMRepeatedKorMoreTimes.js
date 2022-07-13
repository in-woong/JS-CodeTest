var containsPattern = function (arr, m, k) {
  //m개지 잘라서, 반복되는 것이 있나
  // k를 달성하면 true 달성 못하면 false
  for (let i = 0; i <= arr.length; i++) {
    let item = arr.slice(i, i + m);
    let count = 1;
    while (i < arr.length) {
      console.log(
        i,
        item,
        arr.slice(i + m, i + 2 * m),
        equal(item, arr.slice(i + m, i + 2 * m))
      );
      if (!equal(item, arr.slice(i + m, i + 2 * m))) break;
      count++;
      i = i + m;
    }
    console.log(count, i);
    if (count >= k) return true;
  }
  return false;
};
function equal(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) return false;
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) return false;
  }
  return true;
}
