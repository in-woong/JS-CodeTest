function solution(keys, doors) {
    const keyArray= keys.split("").map(key=>key.toUpperCase());
    const doorArray= doors.split("");
    if(keyArray.length !==doorArray.length)return "NO"
    while(keyArray.length!==0){
        const key = keyArray.pop();
        const door = doorArray.shift();
        if(key!==door)return "NO"
    }
    return "YES"
}