/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const level = Math.floor(n/2);
    const matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n)
    }
    let count = 1;
    for (let i = 0; i < level; i++) {
        for (let j = i; j <= n-2-i; j++) {
            matrix[i][j] = count;
            count++
        }
        for (let j = i; j <= n-2-i; j++) {
            matrix[j][n-1-i] = count;
            count++
        }
        for (let j = n-1-i; j >= i + 1; j--) {
            matrix[n-1-i][j] = count;
            count++
        }
        for (let j = n-1-i; j >= i+1; j--) {
            matrix[j][i] = count;
            count++
        }
    }
    if (n % 2 !== 0) {
        matrix[level][level] = count
    }
    return matrix
};

console.log(generateMatrix(3))