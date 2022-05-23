function solution(S) {
  let arr = [];
  for (let i = 0; i < S.length; i++) {
    if (arr[arr.length - 1] == S[i]) {
      arr.pop();
      continue;
    }
    arr.push(S[i]);
    console.log(arr);
  }
  if (arr.length == 0) {
    return 1;
  }
  return 0;
}

const input = ['ABBA', 'ACA', 'ACACA', 'ACAACABB', 'ACADDFFACABB'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
