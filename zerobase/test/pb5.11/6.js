function solution(array) {
  let result = [];
  const arr = permutation(array, 2).map((a) => Number(a.join('')));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      result.push(arr[i]);
    }
  }
  const set = new Set([...result]);
  return set.size;
}

function permutation(array, n) {
  if (n == 1) return array.map((v) => [v]);
  let result = [];

  array.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, index) => index !== idx);
    const perms = permutation(rest, n - 1);
    const combine = perms.map((v) => [fixed, ...v]);

    result.push(...combine);
  });

  return result;
}

const input = [[ 1,1, 3, 4]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
