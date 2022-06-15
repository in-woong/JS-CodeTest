function solution(history, infected) {
  const people = [];
  const set = new Set();
  for (let i = 0; i < history.length; i++) {
    const num = Math.abs(history[i]);
    const index = people.indexOf(num);
    if (index > -1) {
      people.splice(index, 1);
    } else {
      people.push(num);
    }
    if (people.includes(infected)) {
      for (let i = 0; i < people.length; i++) {
        if (people[i] !== infected) {
          set.add(people[i]);
        }
      }
    }
  }
  const result = [...set].sort((a, b) => a - b);
  return result;
}
const input = [[[3, 2, -3, 1, -1, -2, 4, -4, 1, -1], 2], [[1, -1]]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
