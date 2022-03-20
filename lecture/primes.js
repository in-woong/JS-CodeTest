function get_primes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)];
  for (let i = 2; i * i <= num; i += 1) {
    if (prime[i]) {
      for (let j = 2; j * i <= num; j += 1) {
        prime[j * i] = false;
      }
    }
  }
  console.log(
    prime.map((item, index) => {
      if (item) {
        return index;
      }
    })
  );
}

get_primes(48);

let j=i*2

return prime.filter(Boolean)