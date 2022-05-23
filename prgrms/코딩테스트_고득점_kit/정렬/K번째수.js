function solution(array, commands) {
    const answer =[]
    commands.map(command=>{
        let a,b,c
        [ a,b,c] = command
        answer.push(array.slice(a-1,b).sort((a,b)=>a-b)[c-1])
    })
    return answer
}