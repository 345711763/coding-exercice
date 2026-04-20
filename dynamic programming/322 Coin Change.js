var coinChange = function(coins, amount) {
    // dp[i] is the minimum number of coins required to make up i
    const dp = []
    dp[0] = 0
    for (let i = 0; i < coins.length; i++) {
        if (coins[i] <= amount) {
            dp[coins[i]] = 1;
        }
    }
    for (let i = 1; i <= amount; i++) {
        const dps = []
        for (const coin of coins) {
            if (i < coin || dp[i - coin] === -1) {
                continue
            }
            dps.push(dp[i - coin])
        }
        if (dps.length === 0) {
            dp[i] = -1
        } else {
            dp[i] = Math.min(...dps) +1
        }
    }
    return dp[amount]
};

console.log(coinChange([2], 3))