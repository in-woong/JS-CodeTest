function solution(A, S) {
  const set = new Set();
  const map = new Map();
  const zombieSet = new Set(S);

  for (let i = 0; i < A.length; i++) {
    if (zombieSet.has(A[i][0])) {
      zombieSet.add(A[i][1]);
    }
    if (zombieSet.has(A[i][1])) {
      zombieSet.add(A[i][0]);
    }
    if (map.get(A[i][0])) {
      map.set(A[i][0], map.get(A[i][0]) + 1);
    } else {
      map.set(A[i][0], 1);
    }
    if (map.get(A[i][1])) {
      map.set(A[i][1], map.get(A[i][1]) + 1);
    } else {
      map.set(A[i][1], 1);
    }
  }
  const answerArray = Array.from(map).sort((a, b) => b[1] - a[1]);

  let answerNum;
  const answer = [];
  for (let i = 0; i < answerArray.length; i++) {
    if (!zombieSet.has(answerArray[i][0])) {
      answerNum = answerArray[i][1];
      break;
    }
  }

  for (let i = 0; i < answerArray.length; i++) {
    if (!zombieSet.has(answerArray[i][0]) && answerArray[i][1] == answerNum)
      answer.push(answerArray[i][0]);
  }
  if (answer.length) return answer;
  return [S];
}
