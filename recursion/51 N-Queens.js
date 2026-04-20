/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    const chessboard = [];
    for (let i = 0; i < n; i++) {
        chessboard[i] = [];
        for (let j = 0; j < n; j++) {
            chessboard[i][j] = '.'
        }
    }
    function backtrack(currentRow) {
        if (currentRow === n) {
            result.push(cloneChessboard(chessboard))
            return
        }
        for(let i = 0; i < n; i++) {
            if (isValid(chessboard, i, currentRow, n)) {
                chessboard[currentRow][i] = 'Q'
                backtrack(currentRow + 1);
                chessboard[currentRow][i] = '.'
            }
        }
    }
    backtrack(0);
    return result;
};
function isValid(chessboard, col, row, n) {
    // check if there is a Queen in the same column
    for (let i = 0; i < row; i++) {
        if (chessboard[i][col] === 'Q') {
            return false
        }
    }
    let i = row - 1, j = col - 1
    while(i >= 0 && j >= 0) {
        if (chessboard[i][j] === 'Q') {
            return false;
        } else {
            i--;
            j--
        }
    }
    i = row - 1
    j = col + 1
    while(i >= 0 && j < n) {
        if (chessboard[i][j] === 'Q') {
            return false;
        } else {
            i--;
            j++
        }
    }
    return true;
}
function cloneChessboard(chessboard) {
    const newBoard = [];
    for(let i = 0; i < chessboard.length; i++) {
        newBoard[i] = []
        for(let j = 0; j < chessboard.length; j++) {
            newBoard[i][j] = chessboard[i][j]
        }
        newBoard[i] = newBoard[i].join("");
    }
    return newBoard;
}