/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  const one = new Date(date1);
  const two = new Date(date2);
  let res = Math.abs(one - two);

  return res / 1000 / 3600 / 24;
};
