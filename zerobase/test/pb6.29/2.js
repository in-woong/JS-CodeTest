function solution(problems) {
    let count =0;
    for (let i = 0; i < problems.length; i++) {
        let temp = problems[i][0];
        let array = [temp];
        for (let j = 1; j < problems[i].length; j++) {

            if (temp !== problems[i][j]) {
                array.push(problems[i][j])
                temp = problems[i][j]
            }

        }
        const set = new Set(array);
        if(array.length === set.size)count++
    }

    return count
}