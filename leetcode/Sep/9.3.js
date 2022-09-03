/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const array = [];
  array.push(first ^ encoded[0]);

  for (let i = 1; i < encoded.length; i++) {
    array.push(array[array.length - 1] ^ encoded[i]);
  }
  array.unshift(first);
  return array;
};

// //Runtime: 145 ms, faster than 49.57% of JavaScript online submissions for Decode XORed Array.
// Memory Usage: 49.2 MB, less than 12.54% of JavaScript online submissions for Decode XORed Array.
// Next challenges:
