/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let top = 0;
    let bottom = matrix.length - 1;
    let row;
    const m = matrix.length;
    const n = matrix[0].length
    while(top <= bottom) {
        const mid = Math.floor((top + bottom) / 2);
        if (target === matrix[mid][0] || target === matrix[mid][n - 1]) {
            return true
        }
        if (target > matrix[mid][0] && target < matrix[mid][n-1]) {
            row = mid
            break
        }
        if (target > matrix[mid][n-1]) {
            top = mid + 1;
        } else if (target < matrix[mid][0]) {
            bottom = mid - 1;
        }
    }
    if (row === undefined) {
        return false;
    }

    let left = 0, right = n - 1
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target === matrix[row][mid]) {
            return true
        }
        if (target < matrix[row][mid]) {
            right = right - 1
        } else if (target > matrix[row][mid]) {
            left = left + 1;
        }
    }
    return false;
};