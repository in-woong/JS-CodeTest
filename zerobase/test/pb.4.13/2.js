function solution(N, K) {
  let n = N;
  let minus = false;
  if (n < 0) {
    n = Math.abs(n);
    minus = true;
  }
  const Narray = n
    .toString()
    .split('')
    .map((a) => Number(a));

  const value = Narray.shift();
  if (minus) {
    if (value > K) {
      Narray.unshift(value);
      Narray.unshift(K);
      return Number(-Narray.join(''));
    } else {
      for (let i = 0; i <= Narray.length; i++) {
        if (Narray[i] > K) {
          Narray.splice(i, 0, K);
          break;
        }
        if (i === Narray.length) {
          Narray.push(K);
          break;
        }
      }

      Narray.unshift(value);
      return Number(-Narray.join(''));
    }
  }

  if (value < K) {
    Narray.unshift(value);
    Narray.unshift(K);
    return Number(Narray.join(''));
  } else {
    for (let i = 0; i <= Narray.length; i++) {
      if (Narray[i] < K) {
        Narray.splice(i, 0, K);
        break;
      }
      if (i === Narray.length) {
        Narray.push(K);
        break;
      }
    }

    Narray.unshift(value);
    return Number(Narray.join(''));
  }
}

const input = [
  [278, 3],
  [418, 3],
  [438, 3],
  [-278, 3],
  [-5439, 5],
  [-438, 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
