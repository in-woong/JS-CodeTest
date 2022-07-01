function solution(n, languages, friendships) {
  let ln = languages.length;
  let canCommunicate = initialize2DArrayNew(ln, n);

  for (let i = 0; i < ln; i++) {
    for (const x of languages[i]) {
      canCommunicate[i][x - 1] = true;
    }
  }

  let set = new Set();
  for (const fr of friendships) {
    let a = fr[0] - 1;
    let b = fr[1] - 1;
    let flag = false;
    for (const x of languages[a]) {
      if (canCommunicate[b][x - 1]) flag = true;
    }
    if (flag) continue;
    //커뮤니케이션 안되는 애들 추가
    set.add(a);
    set.add(b);
  }
  console.log(set);
  let res = Number.MAX_SAFE_INTEGER;
  console.log(canCommunicate);
  for (let i = 0; i < n; i++) {
    let teach = 0;
    for (const user of set) {
      console.log(canCommunicate[user][i]);
      if (!canCommunicate[user][i]) {
        teach++;
      }
    }
    res = Math.min(res, teach);
  }
  return res;
}

function initialize2DArrayNew(m, n) {
  let data = [];
  for (let i = 0; i < m; i++) {
    let tmp = new Array(n).fill(false);
    data.push(tmp);
  }
  return data;
}

const input = [
  [
    2,
    [[1], [2], [1, 2]],
    [
      [1, 2],
      [1, 3],
      [2, 3],
    ],
  ],
  [
    3,
    [[2], [1, 3], [1, 2], [3]],
    [
      [1, 4],
      [1, 2],
      [3, 4],
      [2, 3],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1], input[i][2])}`);
}
