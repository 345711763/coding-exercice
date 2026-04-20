/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let count = 0;
    let dp = new Array(amount+1).fill(0);
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i === coin) {
                dp[i] = dp[i] + 1;
            }
            if (i > coin) {
                dp[i] = dp[i] + dp[i - coin];
            }
        }
    }
    return dp[amount]
};

console.log(change(5, [1,2,5]))