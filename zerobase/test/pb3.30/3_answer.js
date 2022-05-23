function solution(S) {
  let s = S.replace(/(^0+)/, '');
  let n = 0;
  console.log(s);
  if (s != '' && S.length != 0) {
    n = 1;
    n += (s.match(/1/g).length - 1) * 2;
    n += s.match(/0/g) == null ? 0 : S.match(/0/g).length;
  }
  return n;
}

const input = ['1101', '1111', '0001', '100001'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
