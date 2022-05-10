// function solution(name) {
//   const alphabet = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
//   ];

//   let count = 0;
//   //앞 뒤를 빼고A 만 있는 경우와 아닌 경우
//   const newName = name.slice().split('');
//   const firstIndex = alphabet.indexOf(newName.pop());
//   const lastIndex = alphabet.indexOf(newName.shift());
//   if (newName.filter((a) => a !== 'A').length === 0) {
//     count += Math.min(firstIndex, 26 - firstIndex);
//     count += Math.min(lastIndex, 26 - lastIndex);

//     count++;
//   } else {
//     for (let i = 0; i < name.length; i++) {
//       for (let j = 0; j < alphabet.length; j++) {
//         if (name[i] === 'A' && name.length === 2) {
//           console.log(i.j);
//           break;
//         }
//         if (alphabet[j] === name[i]) {
//           // console.log(j, alphabet.length - j);
//           count += Math.min(j, alphabet.length - j);
//         }
//       }
//       if (i !== name.length - 1) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

function solution(name) {
  let answer = 0;
  const length = name.length;
  let upDownCount = 0;
  let leftRightCountList = [length - 1]; //한 방향으로 쭉 갔을 때
  for (let i = 0; i < length; i++) upDownCount += minUpOrDownCount(name[i]);
  for (let startOfA = 0; startOfA < name.length; startOfA++) {
    if (name[startOfA + 1] !== 'A') continue;
    let endOfA = startOfA + 1; //startOfA까지는 A가 아님, endOfA부터도 A가 아님
    while (endOfA < length && name[endOfA] === 'A') endOfA++;
    const [moveToStartOfA, moveToEndOfA] = [startOfA, length - endOfA];
    leftRightCountList.push(
      Math.min(
        moveToStartOfA * 2 + moveToEndOfA,
        moveToEndOfA * 2 + moveToStartOfA
      )
    ); // 0 -> A.., 0 <- A.., ..A <- -1, //시작부터 뒤로 가는 경우 ..A <- -1, ..A -> -1, 0 -> A..
  }
  answer = upDownCount + Math.min(...leftRightCountList);
  return answer;
}

function minUpOrDownCount(destination) {
  const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index = Alphabet.indexOf(destination);
  return Math.min(index, Alphabet.length - index);
}

const input = ['JAZ', 'JEROEN', 'JAN'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
