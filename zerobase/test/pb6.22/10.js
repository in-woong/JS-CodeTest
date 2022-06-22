function solution(live, commands) {
    const answer = [];
    for (const [idx, count] of commands) {
        live = live.map((item, i) => {
            if (i == idx - 1) {
                return Number(item) - Number(count);
            }
            return item
        })
        answer.push(groupCount(live));
    }
    return answer;

}

function groupCount(live) {

    let count = 0;
    let temp;
    for (let i = 0; i < live.length; i++) {
        
        if (i == 0) {
            temp = live[i];
            count++;
        } else {
            if (temp > live[i]) {
                count++;
                temp = live[i]
            }
        }
    }
    return count

}