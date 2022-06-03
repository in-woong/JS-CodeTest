/**
 * @param S {string}
 * @returns {string}
 */

function solution(S) {
    let result = ''

    S_list = S.split("")

    let left = -1
    let right = -1

    // left에 처음으로 찾은 X의 위치
    // right에 마지막으로 찾은 Y의 위치
    for (let [idx, ch] of S_list.entries()) {
        if (ch === 'X' && left === -1) {
            left = idx
        }
        if (ch === 'Y') {
            right = idx
        }
    }

    // 둘 중 하나라도 못찾았을 경우 원래의 문자열 반환
    if (left === -1 || right === -1) {
        result = S
    } else {
        // .split("").reverse().join("") 을 통하여 문자열 뒤집기
        result = S.substring(0, left) + S.substring(left, right+1).split("").reverse().join("") + S.substring(right+1)
    }

    return result
}