/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix[0].length;
    const n = matrix.length;
    const ans = []
    // 有4条边需要遍历的层数为Math.min(m, n) / 2, 最后一层是横边如果m > n,纵边如果m < n 如果m=n，则是一个数字
    // 先处理外层
    const level = Math.floor(Math.min(m, n) / 2)
    const hasLeft = Math.min(m, n) % 2 !== 0;
    for (let i = 0; i < level; i++) {
        for (let j = i; j < m - 1; j++) {
            ans.push(matrix[i][j]);
        }
        for (let j = i; j < n - i; j++) {
            ans.push(matrix[j][m-1-i]);
        }
        for (let j = m -1 - i; j > i; j--) {
            ans.push(matrix[n-1-i][j])
        }
        for (let j = n - 1 - i; j > i; j--) {
            ans.push(matrix[j][i])
        }
    }
    if (hasLeft) {
        if (m === n) {
            ans.push(matrix[level][level])
        } else if (m < n) {
            for (let i = level; i < n - level; i++) {
                ans.push(matrix[i][level]);
            }
        } else {
            for (let i = level; i < m - level; i++) {
                ans.push(matrix[level][i])
            }
        }
    }
    return ans;
};
const matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
const matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(spiralOrder(matrix1))
console.log(spiralOrder(matrix2))