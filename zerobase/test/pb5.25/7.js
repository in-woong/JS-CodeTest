function solution(A, B) {
  const broadCast = new Map();
  const category = new Map();
  const recommend = [];
  for (let i = 0; i < A.length; i++) {
    broadCast.set(A[i][1], [...(broadCast.get(A[i][1]) || []), A[i][0]]);
    category.set(A[i][0], [...(category.get(A[i][0]) || []), A[i][1]]);
  }
  for (let i = 0; i < B.length; i++) {
    const recommendCategory = broadCast.get(B[i]);
    for (let j = 0; j < recommendCategory.length; j++) {
      recommend.push(...category.get(recommendCategory[j]));
    }
  }
  return new Set(recommend).size;
}

const input = [
  [
    [
      ['Game', 'broadcast1'],
      ['Sport', 'broadcast1'],
      ['Vlog', 'broadcast1'],
      ['Game', 'broadcast2'],
      ['Sport', 'broadcast3'],
      ['Vlog', 'broadcast4'],
    ],
    ['broadcast1'],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
