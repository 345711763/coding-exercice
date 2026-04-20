/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let direction = 'right';
    let i = 0, j = 0;
    const res = [];
    let round = 0;
    while(res.length < m * n) {
        console.log(i, j)
        res.push(matrix[i][j]);
        if (direction === 'right') {
            if (j + 1 < n - round) {
                j++
            } else {
                direction = 'down';
                i++
            }
        } else if (direction === 'down') {
            if (i + 1 < m - round) {
                i++
            } else {
                direction = 'left';
                j--
            }
        } else if (direction === 'left') {
            if (j - 1 >= round) {
                j--
            } else {
                direction = 'up'
                i--
            }
        } else {
            if (i - 1 > round) {
                i --
            } else {
                direction = 'right';
                j++
                round++
            }
        }
    }
    return res;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))