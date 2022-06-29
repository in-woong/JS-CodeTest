function solution(n, price) {
    if (n % 10 == Math.floor(n / 10) - 1) {
        const free = Math.floor(n / 10);
        const num = n - free;
        console.log('num', num -1);
        return price * (num+1);
    } else if (n % 10) {
        const free = Math.floor(n / 10);
        const num = n - free;
        console.log('num', num);
        return price * num;
    } else {
        const free = Math.floor((n - 1) / 10);
        const num = n - free;
        console.log('num', num);
        return price * num;
    }
}

const input = [
  [11, 1],
  [12, 1],
  [23, 1],
  [34, 1],
  [30, 3],
  [20, 1],
  [1, 1],
  [21, 1],
  [22, 2],
  [100, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i][0], input[i][1]));
}
