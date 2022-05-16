function solution(array, p) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    const s = array[i];
    if (s.indexOf(p) === 0) {
      result++;
    }
  }
  return result;
}
const input = [
  [['apple', 'banana', 'kakao', 'naver', 'apache'], 'a'],
  [['asjefkl', 'aeklfj', 'asifljl', 'ruihgjd', 'djgkln'], 'as'],
  [['cloff', 'vxqql', 'tkafv', 'ophik', 'lscmj'], 't'],
  [[], 'naver'],
  [['uehex', 'gevhl', 'bhitm', 'csoqm', 'xsqcf'], 'naver'],
  [['mmzuf', 'sfnki', 'qdpov', 'zpdtg', 'prozo'], ''],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(...input[i])}`);
}
