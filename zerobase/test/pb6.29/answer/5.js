function solution(n, price) {
    const set = Math.floor(n / 11);
    const each = n % 11;
    return set * price * 10 + each * price;
  }
  