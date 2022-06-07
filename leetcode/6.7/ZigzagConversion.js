// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

function solution(s, numRows) {
  let result = [];
  let row = 0;
  let goingUp = false;

  for (let i = 0; i < s.length; i++) {
    result[row] = (result[row] || '') + s[i];
    if (goingUp) {
      row--;
      if (row === 0) {
        goingUp = false;
      }
    } else {
      row++;
      if (row === numRows - 1) {
        goingUp = true;
      }
    }
  }
  return result.join('');
}

const input = [
  ['PAYPALISHIRING', 3],
  ['PAYPALISHIRING', 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
