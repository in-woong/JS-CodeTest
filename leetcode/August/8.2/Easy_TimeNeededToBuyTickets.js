/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let i = 0;
  let count = 0;
  while (tickets[k] !== 0) {
    if (tickets[i] > 0) {
      count++;
      tickets[i]--;
    }

    i = (i + 1) % tickets.length;
  }
  return count;
};
