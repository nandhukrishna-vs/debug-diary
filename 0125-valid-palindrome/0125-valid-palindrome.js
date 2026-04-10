/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr=[];
    for(let i of s){
        if(/[a-z0-9]/i.test(i)){
            arr.push(i.toLowerCase());
        }
    }
    let str=arr.join("");
    let rev=[...arr].reverse().join("");
    if(str==rev){
        return true;
    }else{
        return false;
    }
};