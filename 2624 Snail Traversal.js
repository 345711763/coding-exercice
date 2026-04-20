/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
        return [];
    }
    const result = new Array(rowsCount);
    for (let i = 0; i < rowsCount; i++) {
        result[i] = []
    }
    let row = 0;
    let col = 0;
    let direction = 0; // 0 means down, 1 means up
    for (let i = 0; i < this.length; i++) {
        result[row][col] = this[i]
        if ((row === 0 && direction === 1) || (row === rowsCount-1 && direction === 0)) {
            col++
            direction = direction ? 0 : 1
        } else {
            row += direction === 0 ? 1 : -1
        }
    }
    return result;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

console.log([19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15].snail(5,4))