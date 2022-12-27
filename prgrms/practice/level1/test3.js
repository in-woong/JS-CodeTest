// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here
  let answer = -1;
  const array = A.sort((a, b) => b - a).map((a) => a.toString());
  const map = new Map();
  for (const el of array) {
    const string = el[0] + el[el.length - 1];
    if (map.has(string)) {
      map.set(string, [...map.get(string), el]);
    } else {
      map.set(string, [el]);
    }
  }
  for (const value of map.values()) {
    if (value.length > 1) {
      const sum = Number(value[0]) + Number(value[1]);
      answer = answer < sum ? sum : answer;
    }
  }
  return answer;
}
