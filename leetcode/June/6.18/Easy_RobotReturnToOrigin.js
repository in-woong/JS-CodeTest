function solution(moves) {
  const array = moves.split('');
  let position = [0, 0];
  for (const move of array) {
    if (move == 'U') {
      position = [position[0] + 1, position[1]];
    } else if (move == 'D') {
      position = [position[0] - 1, position[1]];
    } else if (move == 'L') {
      position = [position[0], position[1] - 1];
    } else if (move == 'R') {
      position = [position[0], position[1] + 1];
    }
  }
  if (position[0] == 0 && position[1] == 0) return true;
  return false;
}

const input = ['UD', 'LL'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
