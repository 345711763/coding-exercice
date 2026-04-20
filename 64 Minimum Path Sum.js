/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[0][0]
                continue
            }
            if (i === 0 && j !== 0) {
                dp[i][j] = dp[i][j-1] + grid[i][j]
                continue
            }
            if (i !== 0 && j === 0) {
                dp[i][j] = dp[i-1][j] + grid[i][j]
                continue
            }
            dp[i][j] = Math.min(dp[i-1][j] + grid[i][j], dp[i][j-1] + grid[i][j])
        }
    }
    return dp[m-1][n-1]
};