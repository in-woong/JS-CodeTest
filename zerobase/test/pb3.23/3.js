function solution(s) {
  const string = s.toString().split('');
  const array = Array.from(Array(10), (_, index) => [index, 0]);
  for (let i = 0; i < string.length; i++) {
    array[string[i]][1]++;
  }
  array.sort((a, b) => b[1] - a[1]);
  let result = [];
  array.forEach((item) => result.push(item[0]));
  return result.join(" ");
}

console.log(solution('221123'));
