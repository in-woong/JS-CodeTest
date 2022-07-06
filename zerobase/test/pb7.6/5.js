function solution(arr, prefix, separator, postfix) {
    var answer = [];
    answer.push(prefix);
    
    arr.forEach(item=>{
        answer.push(item);
        answer.push(separator)
    })
    answer.pop()
    answer.push(postfix);

    return answer.join("");
}
max=Number.MAX_SAFE_INTEGER