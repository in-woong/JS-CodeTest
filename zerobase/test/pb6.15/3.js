function solution(n) {
    let count = Math.sqrt(n);
    const answer= count==Math.floor(count)?count:0
    return answer
}
const input = [4, 3, 7, 16];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
