/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;

    for (let row of accounts) {
        let sum = row.reduce((a, b) => a + b, 0);
        max = Math.max(max, sum);
    }

    return max;
};