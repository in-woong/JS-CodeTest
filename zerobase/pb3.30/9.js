function solution(A) {
  let answerA = [];
  let count = 0;
  //   for (let i = 0; i < A.length; i++) {
  //     answerA.push(A[i][0]);
  //     answerA.push(A[i][1]);
  //   }
  //   const answer = [...new Set(answerA)];
  //   let array = makeDict(answer);

  for (let i = 0; i < A.length; i++) {
    if (answerA[A[i][0]] == undefined) {
      answerA[A[i][0]] = [];
    }
    answerA[A[i][0]].push(A[i][1]);
  }
  const arrayA = Object.entries(answerA);
  for (let i = 0; i < Object.entries(answerA).length; i++) {
    let array = Object.entries(answerA)[i][1];
    let key = Object.entries(answerA)[i][0];
    console.log(array.length, key);
    for (let j = 0; j < array.length; j++) {
      if (answerA[array[i]] === undefined) break;
      if (answerA[array[i]].includes(key)) {
        count++;
      }
    }
  }
  return count % 2;
  //   for (let i = 0; i < A.length; i++) {
  //     array[A[i][0]].push(A[i][1]);
  //   }
  //   for (let i = 0; i < A.length; i++) {
  //     if (array[A[i][1]].includes(A[i][0])) {
  //       console.log('follow', A[i]);
  //       count++;
  //     }
  //   }
  //   return count % 2;
  // }

  // const makeDict = (a) => {
  //   let array = [];
  //   for (let i = 0; i < a.length; i++) {
  //     array[a[i]] = [];
  //   }
  //   return array;
}

console.log(
  solution([
    ['철수', '영희'],
    ['영희', '진수'],
    ['진수', '동수'],
    ['진수', '진호'],
    ['영희', '철수'],
  ])
);
