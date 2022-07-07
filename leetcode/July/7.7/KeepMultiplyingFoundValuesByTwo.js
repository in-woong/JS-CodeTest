function solution(nums,original) {
    while(original.includes(nums)){
        original=2*original
    }
}

const input = [
  [[5, 3, 6, 1, 12], 3],
  [[2, 7, 9], 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
