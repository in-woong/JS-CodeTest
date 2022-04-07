function solution(A) {
    let count = 0;
    let money = A;
    const korea = [50000, 10000, 5000,1000, 500, 100, 50, 10, 5, 1];
    for (let i =0; i<korea.length; i++){
    count += Math.floor(money / korea[i]);
    money = money % korea[i];
    }
    return count

}