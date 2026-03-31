/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
for(let i=0;i<arr.length;i++){
    let missing=arr[i]-(i+1);
    if(missing>=k){
        return i+k;
    }
}
return arr.length+k;
};