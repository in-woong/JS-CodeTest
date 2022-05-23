//TODO: 순열 조합 구성해보기

function permutations(arr, n) {
    if (n == 1) return arr.map((v) => [v]);
    let result = [];

    arr.forEach((fixed, idx, arr) => {
        const rest = arr.filter((_, index) => index !== idx);
        const perms = permutations(rest, n - 1);
        const combine = perms.map((v) => [fixed, ...v]);

        result.push(...combine);
    });

    return result;
}

function solution(A, K) {
    const array=permutations(A,2).map(a=>Number(a.join(""))).sort((a,b)=>b-a)
    return array[K-1]
}