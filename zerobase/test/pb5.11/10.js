function solution(array, s) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length % 2 !== 0 && s.slice(0, array[i].length) == array[i])
      count++;
  }
  return count;
}

const input = [[['app', 'ap', 'pa', 'appl'], 'apple']];
for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
