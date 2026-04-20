var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    const memo = new Array(m).fill([])
    for (let i = 0; i < memo.length;i++) {
        memo[i] = new Array(n).fill(undefined);
    }
    memo[0][0] = 1;
    for (let i = 1; i < m; i++) {
        memo[i][0] = obstacleGrid[i][0] === 1 ? 0 : memo[i-1][0]
    }
    for (let i = 1; i < n; i++) {
        memo[0][i] = obstacleGrid[0][i] === 1 ? 0 : memo[0][i-1]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                memo[i][j] = 0
            } else {
                memo[i][j] = memo[i-1][j] + memo[i][j-1]
            }
        }
    }
    return memo[m-1][n-1]
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))