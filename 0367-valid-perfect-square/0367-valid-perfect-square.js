/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num<=0||typeof num!=="number"){
        return false;
    }
    const sqrt=Math.sqrt(num);
    return Number.isInteger(sqrt);
};