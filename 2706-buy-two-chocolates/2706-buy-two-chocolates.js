/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b)
    let choco=prices[0]+prices[1];
    if(choco>money){
        return money;
    }else{
        return money-choco;
    }
};