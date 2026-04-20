/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix =function(n) {
    let current = 1;
    let round = 0;
    const matrix = new Array(n);
    for (let i = 0; i < n; i++) {
        matrix[i] = [];
    }
    while(true) {
        let finished = false;
        for (let j = round; j < n - round; j++) {
            matrix[round][j] = current;
            console.log(current);
            current++;
            if (current === n * n + 1) {
                finished = true;
                break;
            }
        }
        if (finished) {
            break;
        }
        for (let i = round + 1; i < n - round; i++) {
            matrix[i][n-round-1] = current;
            current++;
            if (current === n * n + 1) {
                finished = true;
                break;
            }
        }
        if (finished) {
            break;
        }
        for (let j = n - round - 2; j >= round; j--) {
            matrix[n - round - 1][j] = current;
            current++;
            if (current === n * n + 1) {
                finished = true;
                break;
            }
        }
        if (finished) {
            break;
        }
        for (let i = n - round - 2; i >= round + 1; i--) {
            matrix[i][round] = current;
            current++;
            if (current === n * n + 1) {
                finished = true;
                break;
            }
        }
        if (finished) {
            break;
        }
        round++
    }
    return matrix;
};