function solution(A) {
    const maxInput = Math.max(...A)
    let max = 1;
    for (let i = 1; i <= maxInput; i++) {
        if (isTrue(A, i) && max < i) {
            max = i;
        }
     
    }
    return max
}

function isTrue(Array, value) {
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] % value !== 0) return false
    }
    return true;
}

const input = [6, 12, 4];

console.log(solution(input));
