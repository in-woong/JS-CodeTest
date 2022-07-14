function solution(matrix, b) {
    for(let i=0 ;i<matrix.length;i ++){
        for(let j=0 ;j<matrix.length;j++){
            if(matrix[i][j]!==b)return false
        }
    }
    return true
}