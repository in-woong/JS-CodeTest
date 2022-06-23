function solution(N, X, arrived) {
  let cnt = 0;
  for (idx in arrived) {
    if (arrived[idx] > N) {
      cnt += 1;
    }
  }
  if (cnt >= X) {
    arrived.sort();
    return arrived[arrived.length - 1];
  } else {
    return 'PASS';
  }
}

const input = [
  ['13:05', 3, ['13:15', '13:05', '13:20']],
  ['09:00', 3, ['09:03', '09:04', '09:05']],
  ['12:20', 2, ['13:35', '13:30', '14:20', '12:25', '12:10']],
  ['00:00', 1, ['03:03', '05:05']],
  ['09:05', 2, ['09:00', '08:15', '13:20', '13:15']],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1], input[i][2])}`);
}
