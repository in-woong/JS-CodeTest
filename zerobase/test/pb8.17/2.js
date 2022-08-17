function solution(A) {
  const map = new Map();
  for (let i = 0; i < A.length; i++) {
    if (map.get(A[i][0])) {
      map.set(A[i][0], [...map.get(A[i][0]), A[i][1]]);
    } else {
      map.set(A[i][0], [A[i][1]]);
    }
  }
  let answer = 0;

  for (item of map) {
    const values = item[1];

    const key = item[0];
    for (let i = 0; i < values.length; i++) {
      if (map.get(values[i]) && map.get(values[i]).includes(key)) answer++;
    }
  }

  return answer / 2;
}
