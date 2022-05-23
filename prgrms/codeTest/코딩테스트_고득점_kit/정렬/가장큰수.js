function solution(numbers) {
    for(let i =0; i<numbers.length; i++){
    numbers[i]=String(numbers[i])    
    }
    numbers.sort((a,b)=> a+b <b+a? 1: -1)
    if(numbers[0]==0) {
        return String(0)
    }
    return numbers.join("")

}