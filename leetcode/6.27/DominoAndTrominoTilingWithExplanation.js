function solution(n) {
  let mod = 10 ** 9 + 7;
  const ways = Array.from({ length: n }, () => 0);

  ways[1] = 1;
  ways[2] = 2;
  ways[3] = 5;

  if (n < 4) return ways[n];

  for (let i = 4; i <= n; i++) {
    ways[i] = (ways[i - 1] * 2 + ways[i - 3]) % mod;
  }
  return ways[n];
}
const input = [50];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}

//ways[i]=ways[i-1]+ways[i-2]+ways[i-3]+ways[i-4]
// //Explanation
// You can form a board i from

// board i - 1 by adding image
// board i - 2 by adding image
// board i - 3 by adding image
// board i - 4 by adding image or image
// board i - 5 by adding image or image
// board i - 6 to board 0 can use the same tile textures like board i - 5 to build board i
// So the total ways to build board i is
// ways[i] = ways[i-1] + ways[i-2] + 2 * ( ways[i-3] + ways[i-4] + ... + ways[0] )

// If we extract the formula like this
// ways[i] = ways[i-1] + ways[i-2] + ways[i-3] + 2 * ( ways[i-4] + ... + ways[0] ) + ways[i-3]

// you will realize that
// ways[i] = ways[i-1] + ways[i-1] + ways[i-3]

// or the final recurrence relation is
// ways[i] = 2 * ways[i-1] + ways[i-3]

// There are always 4 variables involved in calculating our results so we can use an array of 4 to reduce our space. And here is the final code
