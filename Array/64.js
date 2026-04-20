/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const cache = new Array(m)
    for (let i = 0; i < m; i++) {
        cache[i] = []
    }
    cache[0][0] = grid[0][0]
    for (let i = 1; i < n; i++) {
        cache[0][i] = grid[0][i] + cache[0][i-1]
    }
    for (let i = 1; i < m; i++) {
        cache[i][0] = grid[i][0] + cache[i-1][0]
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            cache[i][j] = Math.min(cache[i-1][j], cache[i][j-1]) + grid[i][j]
        }
    }
    return cache[m-1][n-1]
};

console.log(minPathSum([[7,4,8,7,9,3,7,5,0],[1,8,2,2,7,1,4,5,7],[4,6,4,7,7,4,8,2,1],[1,9,6,9,8,2,9,7,2],[5,5,7,5,8,7,9,1,4],[0,7,9,9,1,5,3,9,4]]))