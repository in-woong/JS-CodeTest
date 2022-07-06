function solution(s, n) {
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==n)count++
    }return count
}