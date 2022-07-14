/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
  let a = capacityA;
  let countA = 0;
  let elementA;
  let b = capacityB;
  let countB = 0;
  let elementB;

  while (plants.length > 1) {
    const first = plants.shift();
    const second = plants.pop();
    if (a < first) {
      countA++;
      a = capacityA - first;
    } else {
      a -= first;
    }
    if (b < second) {
      countB++;
      b = capacityB - second;
    } else {
      b -= second;
    }
  }
  if (plants.length == 1) {
    const element = plants.pop();
    if (a >= b) {
      if (a < element) countA++;
    } else {
      if (b < element) countB++;
    }
  }

  return countA + countB;
};
