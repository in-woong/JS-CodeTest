//test5실패
function solution(param0) {
  //param0의 길이 순 배열
  param0 = param0.sort((a, b) => b.length - a.length);
  const array = Array.from({ length: param0.length }, () => -1);
  for (let i = 0; i < param0.length; i++) {
    if (array[i] == -1) {
      array[i] = i;
    }
    for (let j = i + 1; j < param0.length; j++) {
      if (includeHuman(param0[i], param0[j])) {
        array[j] = array[i];
      }
    }
  }
  console.log(array);
  const set = new Set(array);
  return set.size;
}

function includeHuman(a, b) {
  const aArray = a.split('');
  const bArray = b.split('');
  for (let i = 0; i < aArray.length; i++) {
    for (let j = 0; j < bArray.length; j++) {
      if (aArray[i] == bArray[j]) return true;
    }
  }
  return false;
}

const input = [
  ['a', 'ac', 'b', 'cb'],
  ['e', 'f', 'g', 'h'],
  ['e', 'ef', 'f', 'ed', 'fg'],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${console.log(solution(input[i]))}`);
}
