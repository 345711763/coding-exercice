/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/* Solution #1 */
// relationship: f(i,j) => f(j, n-1-i) => f()
// function helper(i, j, matrix) {
//     let n = matrix.length;
//     let temp1;
//     let temp2;
//     for (let k = 0; k < 4; k++) {
//         if (k === 0) {
//             temp1 = matrix[j][n-1-i];
//             matrix[j][n-1-i] = matrix[i][j]
//         } else {
//             temp2 = matrix[j][n-1-i]
//             matrix[j][n-1-i] = temp1;
//             temp1 = temp2
//         }
//         let _i = i
//         i = j
//         j = n-1-_i
//     }
// }
// var rotate = function(matrix) {
//     let i = 0;
//     let n = matrix.length
//     while(i <= (n/2) -1) {
//         for (let j = i; j <=n-1-1-i;j++) {
//             helper(i, j, matrix)
//         }
//         i++
//     }
//     return matrix
// };

var rotate = function(matrix) {
    let top = 0;
    let bottom = matrix.length - 1;
    while(top < bottom) {
        let temp = matrix[top]
        matrix[top] = matrix[bottom]
        matrix[bottom] = temp
        top++
        bottom--
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i+1; j <matrix.length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp
        }
    }
    return matrix
}
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotate(matrix))