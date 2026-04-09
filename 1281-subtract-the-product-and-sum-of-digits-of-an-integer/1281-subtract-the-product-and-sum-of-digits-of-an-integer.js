/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum=0;
    let arr= Array.from(String(n),Number);
    let product=1;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
        product=product*arr[i];
        console.log(sum)
        
    }
    return product-sum;
};