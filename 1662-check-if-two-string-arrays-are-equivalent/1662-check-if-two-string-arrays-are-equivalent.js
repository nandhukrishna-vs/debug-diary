/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let wrd1=word1.toString().replaceAll(",",'');
    let wrd2=word2.toString().replaceAll(",","");
    if(wrd1==wrd2){
        return true;
    }else{
        return false;
    }
    
};