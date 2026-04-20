/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // dp[i][j] 表示到第i,j个格子有多少种路径
    // dp[i][j] = dp[i-1][j] + dp[i][j-1];
    // 初始化， 第一行 如果obstacleGrid[i][j] === 1, dp[i][j] = 0 否则 dp[0][j] = dp[0][j-1],  dp[i][j] = dp[i-1][j] + dp[i][j-1]
    // 遍历顺序从上往下，从左往右
    const dp = []
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    for (let i = 0; i < m; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
                continue
            }
            if (i === 0 && j === 0) {
                dp[i][j] = 1
                continue;
            }
            if (i === 0) {
                dp[i][j] = dp[i][j-1]
                continue
            }
            if (j === 0) {
                dp[i][j] = dp[i-1][j]
                continue
            }
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1]
};