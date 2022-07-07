// function sumOfPoints(student) {
//   return student.reduce((prev, x) => prev + x, 0);
// }

// function solution(rewards, k) {
//   var answer = 0;
//   rewards.sort((x, y) => y - x);
//   let students = [...new Array(k)].map(() => new Array());
//   console.log(students);
//   for (let i = 0; i < rewards.length; i++) {
//     let min = Number.MAX_SAFE_INTEGER;
//     let idx;
//     for (let j = 0; j < students.length; j++) {
//       if (sumOfPoints(students[j]) < min) {
//         min = sumOfPoints(students[j]);
//         idx = students.indexOf(students[j]);
//       }
//       console.log(j, students[j], min, idx);
//     }
//     students[idx].push(rewards[i]);
//   }
//   console.log(students);

//   students.forEach((student) => {
//     if (sumOfPoints(student) > answer) answer = sumOfPoints(student);
//   });

//   return answer;
// }

3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
39;
40;
41;
42;
43;
44;
45;
46;
47;
48;
49;
50;
51;
function solution(rewards, k) {
  const list = div(k, rewards);
  console.log(list);
  const base = [0, 1, 2, 3, 4, 5, 6, 7, 8].slice(0, rewards.length);
  const indexList = getPermutations(base, base.length);
  const answerlist = [];

  for (let i = 0; i < indexList.length; i++) {
    const tempList = [];
    let temp = [0, 0];
    let sum = 0;
    for (let j = 0; j < indexList[i].length; j++) {
      sum += rewards[indexList[i][j]];
      temp[1]++;
      if (temp[1] === list[temp[0]]) {
        temp[0]++;
        temp[1] = 0;
        tempList.push(sum);
        sum = 0;
      }
    }
    answerlist.push(Math.max(...tempList));
  }
  return Math.min(...answerlist);
}

function getPermutations(arr, n) {
  const result = [];
  if (n === 1) return arr.map((v) => [v]);
  arr.map((me, i) => {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const permutation = getPermutations(rest, n - 1);
    const attached = permutation.map((item) => [me, ...item]);
    result.push(...attached);
  });
  return result;
}
function div(k, rewards) {
  const arr = Array.from({ length: k }).fill(0);
  let now = 0;
  for (let i = 0; i < rewards.length; i++) {
    arr[now] += 1;
    now++;
    if (now >= k) {
      now = 0;
    }
  }
  return arr;
}

const input = [
  [[6, 1, 3, 2, 2, 4, 1, 2], 3],
  [[4, 1, 2, 5, 3], 3],
  [[1, 2, 3, 4, 5, 6, 7], 3],
  [[50, 20, 400, 1032, 5030], 3],
  [[3, 3, 3], 3],
  [[1], 1],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1])}`);
}
