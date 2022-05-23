function solution(n) {
  let Narray = n.toString(2).split('');
  let diff = Number.NEGATIVE_INFINITY;
  let oneIndex = 0;
  for (let i = 0; i < Narray.length; i++) {
    if (Narray[i] == 1) {
      if (i - oneIndex > diff) {
        diff = i - oneIndex;
      }
      oneIndex = i;
    }
  }
  return diff;
}

const input = [11];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
