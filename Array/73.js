/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/*
1.检查并记录第一行和第一列是否有0
2. 使用第一列和第一行来标记其余行列是否有0
3.利用第一行和第一列的标0情况给其他行列标0
4.最后处理第一行和第一列
 */
var setZeroes = function(matrix) {
    let firstRowHasZero = false;
    let firstColumnHasZero = false;
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColumnHasZero = true
        }
    }
    for (let i = 0; i < n; i++) {
        if (matrix[0][i] === 0) {
            firstRowHasZero = true
        }
    }
    for (let i = 1; i < m;i ++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < m;i ++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (firstRowHasZero) {
        for (let i =0; i<n;i++) {
            matrix[0][i] = 0
        }
    }
    if (firstColumnHasZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0
        }
    }
};