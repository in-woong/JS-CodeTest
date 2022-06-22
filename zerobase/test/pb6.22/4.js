function solution(members) {
    const set = [...new Set(members)]
    const map = new Map();
    map.set(set[0], []);
    map.set(set[1], []);
    for (let i = 0; i < members.length; i++) {
        if (members[i] == set[0]) {
            const array = map.get(set[0])
            array.push(i)
            map.set(set[0], array)
        } else {
            const array = map.get(set[1])
            array.push(i);
            map.set(set[1], array)
        }
    }
    const values = [...map.values()];
    for (let i = 0; i < values.length; i++) {
        if (values[i].length == 2) {
            return values[i]
        }
    }
}