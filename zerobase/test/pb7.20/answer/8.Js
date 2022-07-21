function solution(arr) {
  const set = new Set();
  console.log(arr.flatMap((s) => s.split(' ')));
  //   .map((s) => set.add(s));
  return Array.from(set).sort();
}

const input = [['We can', 'give advice', 'but we cannot give conduct']];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
