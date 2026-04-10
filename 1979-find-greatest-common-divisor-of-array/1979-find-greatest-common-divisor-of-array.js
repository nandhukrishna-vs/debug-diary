/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let max= Math.max(...nums);
    let min=  Math.min(...nums);
    let largegcd=0;
    for(let i=0;i<=min;i++){
        if((max%i==0)&&(min%i==0)){
            if(i>largegcd){
                largegcd=i;
            }
        }
    }
    return largegcd;
};