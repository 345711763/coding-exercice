/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = new Array(m);
    for (let i = 0; i < m; i++) {
        visited[i] = [];
        for (let j = 0; j < n; j++) {
            visited[i][j] = false;
        }
    }
    let maxArea = 0;
    let current = 0;
    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || grid[i][j] === 0) {
            return
        }
        visited[i][j] = true;
        current++;
        dfs(i, j+1);
        dfs(i, j-1)
        dfs(i+1, j)
        dfs(i-1, j)
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && grid[i][j] === 1) {
                dfs(i, j);
                maxArea = Math.max(current, maxArea)
                current = 0;
            }
        }
    }

    return maxArea
};

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))