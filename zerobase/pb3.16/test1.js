function solution(s) {
    let cc = [...s];
    let result = [];
    let pprev, prev, current;
    pprev = cc[0];
    const length = cc.length
    while (find(cc)) {
        for (let i = 0; i < length; i++) {
            current = cc[i];
            if (i <= 1) {
                if (prev === current) {
                    result.pop();
                } else {
                    result.push(cc[i]);
                }
                console.log(result,prev, current,i)
                prev = current;
                
            } else {
                if (prev === current && pprev !== current) {
                    result.pop();
                } else {
                    result.push(cc[i]);
                }
                pprev = prev;
                prev = current;
            }
        }
        cc = result;
        console.log(cc,"First")
    }
    return cc.join("");
}

function find(cc) {
    let prev, current;
    for (let i = 0; i < cc.length; i++) {
        current = cc[i];
        if (prev == current) {
            return true;
        }
        prev = current;
    }
    return false;
}

console.log(solution("bb"), "result");