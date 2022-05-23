function solution(citations) {
  let hIndex = Math.max(...citations);
  while (true) {
    let count = 0;
    for (let i = 0; i < citations.length; i++) {
      if (citations[i] >= hIndex) {
        count++;
      }
    }
    if (count >= hIndex) {
      return hIndex;
    } else {
      hIndex--;
    }
  }
}

const input = [[3, 0, 6, 1, 5]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
