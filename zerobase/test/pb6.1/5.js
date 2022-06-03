function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      answer.push(arr1[i]);
    }
  }

  return answer.sort((a, b) => a - b);
}

function solution(arr1, arr2) {
    const set = new Set()
  
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          set.add(arr1[i])
        }
      }
    }
  
    const result = Array.from(set)
    result.sort((a, b) => a - b)
  
    return result
  }

const input = [
  [
    [1, 7, 8, 4],
    [2, 4, 6, 8],
  ],
  [
    [6, 3, 2, 7, 5],
    [2, 7, 5, 10, 4],
  ],
  [[1], [10]],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  ],
  [[1, 2, 3, 4, 56, 7, 8, 9], [10]],
  [
    [20, 20, 14, 10, 6],
    [7, 4, 9, 9, 2],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
