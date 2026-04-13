/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let i=0,r=0,underscore=0;
    for(move of moves){
        if(move==="L")i++;
        else if(move==="R")r++;
        else underscore++;
    }
    
    return Math.abs(i-r)+underscore;
};