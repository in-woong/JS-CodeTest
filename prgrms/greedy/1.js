// function solution(n, lost, reserve) {
//     lost.sort((a, b) => a - b);
//     reserve.sort((a, b) => a - b);
//       let same =[];
//       for(let i =0; i<reserve.length; i++){
//           const giver = reserve[i];
//           for(let j =0; j<lost.length; j++){
//               const loster = lost[j]
//               if(giver ===loster)same.push(giver);
//           }
//       }
//       const newReserve=reserve.filter(a=>!same.includes(a))
//       const newLost = lost.filter(a=>!same.includes(a))
//     for (let i = 0; i < newReserve.length; i++) {
//       if (newLost.includes(newReserve[i] - 1) || newLost.includes(newReserve[i] + 1)) {
//         const a = newLost.shift();
//       }
//     }
//     return n - newLost.length;
//   }

function solution(n, lost, reserve) {
  return (
    n -
    lost.filter((a) => {
      const b = reserve.find((r) => Math.abs(r - a) <= 1);
      console.log(b);
      if (!b) return true;
      reserve = reserve.filter((r) => r !== b);
      console.log(reserve);
    }).length
  );
}

const input = [
  [5, [2, 4], [1, 3, 5]],
  [5, [2, 4], [3]],
  [3, [3], [1]],
  [4, [3, 1], [2, 4]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(...input[i])}`);
}
