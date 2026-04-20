/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    let result = false;
    let visited = new Array(m);
    for (let i = 0; i < m; i++) {
        visited[i] = [];
        for (let j = 0; j < n; j++) {
            visited[i][j] = 0
        }
    }
    function backtrack(i, j, count) {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[count] || visited[i][j] === 1) {
            return;
        }
        if (count + 1 === word.length) {
            result = true;
            return;
        }
        visited[i][j] = 1
        backtrack(i-1, j, count+1)
        backtrack(i+1, j, count+1)
        backtrack(i, j+1, count+1)
        backtrack(i, j-1, count+1)
        visited[i][j] = 0
    }
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++) {
            backtrack(i, j, 0)
            if (result) {
                return true;
            }
        }
    }
    return false;
};