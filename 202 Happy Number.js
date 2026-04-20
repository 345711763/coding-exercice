/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let i;
    while(true)  {
        const sum = digitsSum(n)
        if (sum === 1) {
            return true
        }
        if (sum === i) {
            return false
        }
        if (i === undefined) {
            i = sum;
        }
        n = sum;
    }
};


function digitsSum(n) {
    const s = `${n}`
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum += Math.pow(parseInt(s[i]), 2);
    }
    return sum;
}

console.log(isHappy(3))