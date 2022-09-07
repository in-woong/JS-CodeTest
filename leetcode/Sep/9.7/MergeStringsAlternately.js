/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let answer="";
    const word1Array=word1.split("");
    const word2Array=word2.split("");
    let count=0;
    while(word1Array.length ||word2Array.length){
        
        if(word1Array.length)answer+=word1Array.shift();
        if(word2Array.length)answer+=word2Array.shift();
    }
    
    return answer
};