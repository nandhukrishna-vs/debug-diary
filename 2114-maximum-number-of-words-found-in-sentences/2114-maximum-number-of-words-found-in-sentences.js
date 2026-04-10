/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max=0;
    for(let sentence of sentences){
        let space=0;
        for(let char of sentence){
            if(char===" ")space++;
        }
        max=Math.max(max,space+1)
    }
    return max;
};