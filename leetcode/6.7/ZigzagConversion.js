function solution(s, numRows) {
  let result = [];
  let row = 0;
  let goingUp = false;

  for (let i = 0; i < s.length; i++) {
    result[row] = (result[row] || '') + s[i]; // append letter to active row
    if (goingUp) {
      row--;
      if (row === 0) goingUp = false; // reverse direction if goingUp and reaching top
    } else {
      row++;
      if (row === numRows - 1) goingUp = true; // reverse direction after reaching bottom
    }
  }
  return result.join('');
}

const input = [];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
