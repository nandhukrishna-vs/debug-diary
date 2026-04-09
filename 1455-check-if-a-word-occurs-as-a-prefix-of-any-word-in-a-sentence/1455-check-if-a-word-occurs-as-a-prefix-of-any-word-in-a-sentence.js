/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let word=sentence.split(" ");
    for(let i=0;i<word.length;i++){
        if(word[i].startsWith(searchWord)){
            return i+1;
        }   
    }
    return -1;
};