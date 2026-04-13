/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let num=nums.sort((a,b)=>a-b);
    let arr=[]
    for(let i=0;i<num.length;i+=2){
       arr.push(num[i+1]);
       arr.push(num[i]);
    }
    return arr;
};