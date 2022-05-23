function solution(A, B) {
    var answer = 0;
    let broadcasts = [];
    let genres = []
    for (let i = 0; i < A.length; i++) {
        if (broadcasts[A[i][1]] == undefined) {
            broadcasts[A[i][1]] = [A[i][0]]
        } else {
            broadcasts[A[i][1]].push(A[i][0])
        }
        if (genres[A[i][0]] == undefined) {
            genres[A[i][0]] = [A[i][1]]
        } else {
            genres[A[i][0]].push(A[i][1])
        }

    }
    let count =[];
    for( let i=0; i<broadcasts[B].length; i++){
        console.log(genres[broadcasts[B][i]])
        count.push(...genres[broadcasts[B][i]])
    }
    return [...new Set(count)].length
}