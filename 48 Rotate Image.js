/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * rotate top -> bottom
 * rotate main diagonal
 */
var rotate = function(matrix) {
    // [i, j] = [j , n - 1 - i]
    // 7 -> [2, 0] - > [0, 0]
    const m = matrix.length;
    const n = matrix[0].length;
    let top = 0;
    let bottom = m - 1;
    while(top < bottom) {
        const temp = matrix[top];
        matrix[top] = matrix[bottom];
        matrix[bottom] = temp;
        top++
        bottom--
    }
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < n; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp;
        }
    }
    return matrix;
};