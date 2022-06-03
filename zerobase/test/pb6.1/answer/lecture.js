/**
 * @param finish {array}
 * @param submit {array}
 * @return int
 */
function solution(finish, submit) {
    const finishSet = new Set(finish)
    const submitSet = new Set(submit)

    const intersect = new Set([...finishSet].filter(x => submitSet.has(x)))
    return intersect.size
}