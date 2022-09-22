/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const answer = Array.from({ length: n }, (_, idx) => {
    const n = idx + 1;
    if (n % 3 == 0 && n % 5 == 0) return 'FizzBuzz';
    if (n % 3 == 0) return 'Fizz';
    if (n % 5 == 0) return 'Buzz';
    return n.toString();
  });
  return answer;
};
