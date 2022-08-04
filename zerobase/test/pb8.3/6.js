function solution(array, s) {
    let answer = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].length % 2 == 0) continue;
        const index = s.indexOf(array[i]);
        if (index == 0) answer++;
    }

    return answer;
}