function solution(board) {
    const n = board.length;
    let column = [];
    let row = [];
    for (let i = 0; i < n; i++) {
        if (board[0][i] == true) {
            column.push(i);
        }
    }
    for (let i = 0; i < n; i++) {
        if (board[i][0] == true) {
            row.push(i);
        }
    }
    let count = 0;
    for (let i = 0; i < column.length; i++) {
        if (checkColumn(column[i], board)) count++
    }
    for (let i = 0; i < row.length; i++) {
        if (checkRow(row[i], board)) count++
    }



    return count;
}

function checkColumn(n, board) {
    for (let i = 0; i < board.length; i++) {
        if (board[i][n] == false) return false
    }
    return true;
}
function checkRow(n, board) {
    for (let i = 0; i < board.length; i++) {
        if (board[n][i] == false) return false
    }
    return true;
}