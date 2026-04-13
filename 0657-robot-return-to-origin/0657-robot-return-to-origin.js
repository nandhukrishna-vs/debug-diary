/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let u=0,d=0,l=0,r=0;
    for(let move of moves){
        if(move==="U")u++;
        else if(move==="D")d++;
        else if(move==="L")l++;
        else if(move==="R")r++;
    }
    return (u===d) &&(l===r) 
};