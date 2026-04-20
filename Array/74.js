/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    if (m === 0 || n === 0) {
        return false;
    }
    let start = 0;
    let end = m * n-1
    while(start <= end) {
        const mid = Math.floor((end + start)/2)
        const val = matrix[Math.floor(mid / n)][mid % n]
        if (val === target) {
            return true
        }
        if (val < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
};

// create debounce function
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}