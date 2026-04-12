/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let nums2=[...nums];
    let result=[...nums,...nums2]
    return result;
};