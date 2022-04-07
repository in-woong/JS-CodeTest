Set.prototype.union = function (setB) {
  let union = new Set(this);
  for (let elem of setB) {
    union.add(elem);
  }
  return union;
};

function solution(A, B) {
  let name = new Map();
  let category = new Map();
  let recommend = new Set();

  for (let i = 0; i < A.length; i++) {
    if (Array.from(category.keys()).indexOf(A[i][0]) !== -1) {
      let temp = category.get(A[i][0]);
      temp.push(A[i][1]);
      category.set(A[i][0], temp);
    } else {
      category.set(A[i][0], [A[i][1]]);
    }

    if (Array.from(name.keys()).indexOf(A[i][1]) !== -1) {
      let temp = name.get(A[i][1]);
      temp.push(A[i][0]);
      name.set(A[i][1], temp);
    } else {
      name.set(A[i][1], [A[i][0]]);
    }
  }

  for (let i = 0; i < B.length; i++) {
    for (let j = 0; j < name.get(B[i]).length; j++) {
      recommend = recommend.union(new Set(category.get(name.get(B[i])[j])));
    }
  }
  return recommend.size;
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

  [
    [
      ['Game', 'broadcast1'],
      ['Game', 'broadcast2'],
      ['Sport', 'broadcast3'],
      ['Vlog', 'broadcast4'],
    ],
    ['broadcast2', 'broadcast3'],
  ],

  [
    [
      ['Game', 'broadcast1'],
      ['Sport', 'broadcast1'],
      ['Vlog', 'broadcast1'],
      ['Game', 'broadcast2'],
      ['Sport', 'broadcast3'],
      ['Vlog', 'broadcast4'],
    ],
    ['broadcast4'],
  ],

  [
    [
      ['Game', 'broadcast1'],
      ['Vlog', 'broadcast1'],
      ['Game', 'broadcast2'],
      ['Sport', 'broadcast3'],
      ['Vlog', 'broadcast4'],
    ],
    ['broadcast1'],
  ],

  [
    [
      ['Game', 'broadcast1'],
      ['Vlog', 'broadcast1'],
      ['Game', 'broadcast2'],
      ['Sport', 'broadcast3'],
      ['Vlog', 'broadcast4'],
    ],
    ['broadcast3'],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
