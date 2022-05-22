function solution(n, results) {
  const adjustList = {};
  let count = 0;
  //2: [[이긴선수 배열], [진 선수들배열]]

  for (let [v1, v2] of results) {
    adjustList[v1] ? adjustList[v1][0].push(v2) : (adjustList[v1] = [[v2], []]);
    adjustList[v2] ? adjustList[v2][1].push(v1) : (adjustList[v2] = [[], [v1]]);
  }
  for (let i = 1; i <= n; i++) {
    if (adjustList[i][0].length + adjustList[i][1].length == n - 1) {
      count++;
    }
  }

  let answer = 0;
  const players = Array.from({ length: n }, (v, i) => i + 1);

  const chart = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));

  results.map((result) => {
    const [win, lose] = result;
    chart[win][lose] = 1;
    chart[lose][win] = -1;
    chart[win][win] = 0;
    chart[lose][lose] = 0;
  });

  for (let mid of players) {
    for (let start of players) {
      for (let end of players) {
        if (chart[start][mid] === 1 && chart[mid][end] === 1)
          chart[start][end] = 1;
        if (chart[start][mid] === -1 && chart[mid][end] === -1)
          chart[start][end] = -1;
      }
    }
  }

  chart.map((player) => {
    player.slice(1, player.length).every((p) => p !== false) && answer++;
  });
  return answer;
}
const input = [
  [
    5,
    [
      [4, 3],
      [4, 2],
      [3, 2],
      [1, 2],
      [2, 5],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(...input[i])}`);
}
