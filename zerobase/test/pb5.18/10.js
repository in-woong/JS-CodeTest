function solution(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    const array = i.toString(2).split('');
    let count = 0;
    let idxArray = [];
    array.forEach((item, idx) => {
      if (item == '1') {
        count++;
        idxArray.push(array.length - idx - 1);
      }
    });
    if (count > 1) {
      idxArray.shift();
      const item = idxArray.shift();
      result += 2 ** item;
    }
  }
  return result;
}

const input = [6];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
