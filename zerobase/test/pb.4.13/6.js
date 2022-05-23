function solution(S) {
    const stringA = S.split("");
    for (let i = 0; i < stringA.length; i++) {
        if (stringA[i] !== stringA[stringA.length - 1 - i]){
            return 0;
        }
    }
    return 1
}