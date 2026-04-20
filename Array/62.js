/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = new Array(m).fill([])
    for (let i = 0; i < memo.length;i++) {
        memo[i] = new Array(n).fill(undefined);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                memo[i][j] = 1
            } else {
                memo[i][j] = memo[i-1][j] + memo[i][j-1]
            }
        }
    }
    return memo[m-1][n-1]
    // return ans.count;
};

console.log(uniquePaths(3,2))