function solution(p, s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const str = s[i];

        if (match(str, p)) { count++; console.log(str) }
    }
    return count;
}

function match(str, pattern) {
    let s = 0;
    let p = 0;
    while (p < pattern.length && s < str.length) {

        if (pattern[p] == "*") {
            while (s < str.length) {
                if (pattern[p + 1] == str[s]) break;
                s++;
            }
            p++;
        } else if (pattern[p] == "?") {
            p++;
            s++;
        } else {
            if (pattern[p] != str[s]) return false;
            p++;
            s++;
        }

    }
    console.log(p,s, pattern.length, str.length)
    if(s!==str.length)return false;
    if(p!==pattern.length && pattern[pattern.length-1]!=="*")return false;
    return true
}