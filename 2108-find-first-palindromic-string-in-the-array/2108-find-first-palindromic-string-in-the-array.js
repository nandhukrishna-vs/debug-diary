/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    function ispalindrome(word){
        let reversed = word.split("").reverse().join("");
        return word===reversed;
    }
    for(let i=0;i<words.length;i++){
        if(ispalindrome(words[i])){
            return words[i];
        }
    }
    return "";
};