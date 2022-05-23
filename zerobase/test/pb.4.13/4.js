function solution(N, K) {
    let result = 0;
    for (let i = 0; i <= N; i++) {
        result += confirmNumber(i, K)
    }
    return result
}

function confirmNumber(N, K) {
    let result = 0;
    let array = N.toString().split("").map(a => Number(a));
    for (let i = 0; i < array.length; i++) {
        if (array[i] === K) {
            result++;
        }
    }
    return result;
}