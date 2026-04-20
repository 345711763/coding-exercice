/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 *  find the regions that have a cell at the edge mark them as 'T'
 *  Turn the rest of 'O' into 'X'
 *  Turn 'T' back into 'O'
 **/

var solve = function(board) {
    const m = board.length;
    const n = board[0].length;
    function turn(i, j) {
        if (i < 0 || i >= m || j < 0 || j>=n || board[i][j] !== "O") {
            return
        }
        board[i][j] = 'T'
        turn(i-1, j);
        turn(i+1, j);
        turn(i, j+1);
        turn(i, j-1);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((i === 0 || i === m - 1 || j === 0 || j === n - 1) && board[i][j] === 'O') {
                // turn connected "O" into "T"
                turn(i, j);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                // turn the rest of "O" into "X"
                board[i][j] = "X"
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'T') {
                // turn "T" back into "O"
                board[i][j] = "O"
            }
        }
    }
};