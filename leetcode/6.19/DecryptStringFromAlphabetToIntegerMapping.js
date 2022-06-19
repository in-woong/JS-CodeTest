// You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// The test cases are generated so that a unique mapping will always exist.

function solution(s) {
  const sArray = s.split('');
  const result = [];
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] == '#') {
      const two = result.pop();
      const one = result.pop();
      result.push(one + two);
    } else {
      result.push(sArray[i]);
    }
  }
  let answer = [];
  for (let i = 0; i < result.length; i++) {
    answer.push(String.fromCharCode(Number(result[i]) + 64).toLowerCase());
  }
  return answer;
}

const input = ['10#11#12', '1326#'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
