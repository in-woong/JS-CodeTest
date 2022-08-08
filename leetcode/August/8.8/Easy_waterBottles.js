/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let answer = numBottles;
  while (numBottles >= numExchange) {
    const n = Math.floor(numBottles / numExchange);
    numBottles = (numBottles % numExchange) + n;
    answer += n;
  }
  return answer;
};
