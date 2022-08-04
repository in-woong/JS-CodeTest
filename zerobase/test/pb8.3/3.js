function solution(field, n) {
    let answer = 0;
    for (let i = 0; i <= field.length - n; i++) {
        for (let j = 0; j <= field[0].length - n; j++) {
            let temp = count(i, j)
            
            answer = answer < temp ? temp : answer;
        }

    }

    function count(y, x) {
        let answer = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (field[y + i][x + j] == "1") answer++;
            }

        }
        return answer;
    }
    return answer;
}