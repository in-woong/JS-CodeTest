/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  const numArray = num
    .toString()
    .split('')
    .map((v) => +v)
    .sort((a, b) => a - b);
  //1:3
  let min = Infinity;
  for (let i = 0; i < 4; i++) {
    const temp = numArray.slice();
    temp.splice(i, 1);
    let b = Number(temp.join(''));
    let a = Number(numArray[i]);
    let sum = a + b;
    min = min > sum ? sum : min;
  }

  //2:2
  for (let i = 0; i < 4; i++) {
    const temp = numArray.slice();
    temp.splice(i, 1);
    for (let j = 0; j < temp.length; j++) {
      let a = Number(numArray[i].toString() + temp[j].toString());
      const tTemp = temp.slice();
      tTemp.splice(j, 1);
      let b = Number(tTemp.join(''));
      let sum = a + b;
      min = min > sum ? sum : min;
    }
  }
  return min;
};
