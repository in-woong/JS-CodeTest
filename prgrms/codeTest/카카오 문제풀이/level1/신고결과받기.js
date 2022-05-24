// function solution(id_list, report, k) {
//   //idlist 의 개수 만큼 [[],[],[]] array를 만든다
//   //["neo, frodo"]["neo"],["muzi", "frodo"],[]가 있으면 다 돌면서 id_list
//   //블랙리스트를 만든다
//   //count 를 돌면서 블랙리스트 카운트를 센다.

//   const countArray = Array.from({ length: id_list.length }, () => []);
//   const count = Array.from({ length: id_list.length }, () => 0);
//   const result = Array.from({ length: id_list.length }, () => 0);

//   for (let i = 0; i < id_list.length; i++) {
//     report.forEach((ids) => {
//       let [userId, reportId] = ids.split(' ');
//       if (userId === id_list[i]) {
//         if (!countArray[i].includes(reportId)) {
//           countArray[i].push(reportId);
//         }
//       }
//     });
//   }

//   for (let i = 0; i < countArray.length; i++) {
//     for (let j = 0; j < id_list.length; j++) {
//       if (countArray[i].includes(id_list[j])) {
//         count[j] += 1;
//       }
//     }
//   }

//   for (let i = 0; i < countArray.length; i++) {
//     for (let j = 0; j < count.length; j++) {
//       if (count[j] >= k) {
//         if (countArray[i].includes(id_list[j])) {
//           result[i] += 1;
//         }
//       }
//     }
//   }
//   return result;
// }

function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);
  const reported = {};

  const arrPosition = {};
  id_list.forEach((e, idx) => {
    arrPosition[e] = idx;
  });

  const idMap = {};
  id_list.forEach((e) => {
    idMap[e] = new Set();
  });

  report.forEach((e) => {
    const [caller, cheater] = e.split(' ');
    idMap[caller].add(cheater);
  });

  for (const key in idMap) {
    idMap[key].forEach((cheater) => {
      reported[cheater] = reported[cheater] + 1 || 1;
    });
  }
  for (const key in idMap) {
    idMap[key].forEach((cheater) => {
      if (reported[cheater] >= k) {
        answer[arrPosition[key]] += 1;
      }
    });
  }
  return answer;
}

const input = [
  [
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2,
  ],
  [['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1], input[i][2])}`);
}
