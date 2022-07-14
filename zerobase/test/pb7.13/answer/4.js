function solution(num) {
  num = num.toString();
  min_num = Math.min(...num);

  if (num.indexOf(min_num) === 0 && num.length === 2) {
    num.shift();
    min_num = Math.min(...num);
  }

  return min_num;
}
