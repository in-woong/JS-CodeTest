// function solution(s, k) {
//   const len = s.length;
//   const lenArray = [];
//   const answer = [];
//   for (let i = len; i > 0; i--) {
//     if (k % i == 0) {
//       lenArray.push(i);
//     }
//   }
//   for (let i = 0; i < lenArray.length; i++) {
//     let count = k / lenArray[i];
//     let temp = s.substring(0, lenArray[i]);
//     let tempAnswer = '';
//     for (let n = 0; n < count; n++) {
//       tempAnswer += temp;
//     }
//     answer.push(tempAnswer);
//   }
//   console.log(answer);
//   return answer.sort().shift();
// }

// function solution(s, k) {
//   //배열을 만든다. 두배로 늘리고, 배열을 만든다.대신 원래 자리수 보다는 큰수
//   const sArray = s.split('');
//   const an = [];
//   let answer = [s];
//   while (answer.length) {
//     for (let n = 0; n < answer.length; n++) {
//       let string = answer[n];
//       const temp = [];
//       for (let i = 1; i <= string.length; i++) {
//         temp.push(string.substring(0, i));
//       }
//       const array = [];
//       for (let i = 0; i < temp.length; i++) {
//         const first = temp[i] + temp[i];
//         const second = temp[i].substring(0, temp[i].length - 1);
//         if (first.length == k) an.push(first);
//         if (second.length == k) an.push(second);
//         if (!temp.includes(first) && first.length <= 2 * k) {
//           array.push(first);
//         }
//         if (!temp.includes(second) && second.length > temp[i].length) {
//           array.push(second);
//         }
//       }
//       answer = array;
//     }
//   }
//   return an.sort().shift();
// }

// function solution(s, k) {
//   //charcode가 커진 곳 직전 index에서 자르고

//   let index = 0;
//   let min = s.charCodeAt(0);
//   let answer = s;
//   for (let i = 0; i < s.length; i++) {
//     index = min > s.charCodeAt(i) ? i : index;
//     min = min > s.charCodeAt(i) ? s.charCodeAt(i) : min;
//   }
//   console.log(index);

//   let n = s.substring(0, index + 1);

//   answer = n;
//   let firstTemp = '';
//   let secondTemp = '';
//   console.log(n);
//   while (firstTemp.length < k) {
//     firstTemp += s;
//   }
//   while (secondTemp.length < k) {
//     secondTemp += n;
//   }
//   console.log(firstTemp);
//   answer = [
//     firstTemp.substring(0, k + 1),
//     secondTemp.substring(0, k + 1),
//   ].sort()[0];
//   return answer;
// }

//첫번째 문자보다 큰곳

function solution(s, k) {
  //charcode가 커진 곳 직전 index에서 자르고

  let min = s.charCodeAt(0);
  let index = 0;
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > min) {
      index = i;
      break;
    }
  }
  console.log(index);
  if (index !== 0) {
    const n = s.substring(0, index);
    while (answer.length < k) {
      answer += n;
    }
  } else {
    while (answer.length < k) {
      answer += s;
    }
  }

  return answer;
}

const input = [
  ['ccaccaca', 20],
  ['zdwvnglnyoyfzummnggzbczgorbhpsdysnvwqel', 1958],
  ['i', 17],
  ['aysjsi', 1170],
  [
    'xliaadfpxuxpswnitnxcsdhcztmtytshblqwgakkjuxqrausepxsqchwtbypbemtameugpgkjallafhsnufttbosjugqamtzqaznnkgxmcyyygmfhbulkjcwkbstrwhlaucqehkfqtabbkxisaoyloihqkqwciuazzfbwrlmkjmzgwmecvnzyvoxhnpfvifzhvkktmyvvadtiwxdwqsynpaacrmjeuqnicbdrzhbnlbfbcojbkbxewkrxmtkvqdqbhoitnqurnklltxqtnoeolepxlqfxiqqvdbjzqwvlknwdqfxfuxlskkmnjxyahxjmqlntywhtnohsfwxausicbpkmwujunmmaqqntakgachuwcelclpefxdslulmssugiqmnlquazlqnnaotjpnrpzfhpqehrxbzlfazpslzbbvcqsjrzobzgxplnpwwvzajrxtoycbmfvqdyizcllpxfzvupdagjkuduidbwenuaii',
    2509,
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(...input[i])}`);
}
