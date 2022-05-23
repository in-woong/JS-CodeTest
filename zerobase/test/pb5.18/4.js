function solution(bridge, jumpsize) {
  let rockIndex = 0;
  for (let i = 1; i < bridge.length; i++) {
    if (bridge[i] == 1) {
      
      if (i - rockIndex - 1 > jumpsize) {
        return false;
      }
      rockIndex = i;
    }
   
  }
  return true;
}

const input = [[[1, 0, 1, 0, 0, 1], 2]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1], input[i][2])}`);
}
