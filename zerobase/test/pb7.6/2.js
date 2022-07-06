function solution(n) {
    let min = Math.pow(10, n - 1);
    let max = Math.pow(10, n);
    let count = 0;
    for (let i = min; i < max; i++) {
        if (palindrom(i)) { count++
        console.log(i,count) }
    }

    return count%100000007;
}

function palindrom(number) {
    number=number.toString().split("")
    for (let i = 0; i < number.length; i++) {
        
        if (number[i] !== number[number.length - 1 - i]) return false;
    }
    return true;
}