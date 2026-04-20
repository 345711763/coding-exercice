/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSubBox(row, col, board) {
    const set = new Set();
    for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
            if (board[i][j] === '.') continue;
            if (set.has(board[i][j])) return false
            set.add(board[i][j])
        }
    }
    return true;
}
var isValidSudoku = function(board) {
    for (let i = 0; i < board.length; i+= 3) {
        for (let j = 0; j < board[0].length; j+= 3) {
            if (!isValidSubBox(i, j, board)) {
                return false
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        const set = new Set();
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '.') continue;
            if (set.has(board[i][j])) return false
            set.add(board[i][j]);
        }
    }
    for (let j = 0; j < board[0].length; j++) {
        const set = new Set();
        for (let i = 0; i < board.length; i++) {
            if (board[i][j] === '.') continue;
            if (set.has(board[i][j])) return false
            set.add(board[i][j])
        }
    }
    return true;
};