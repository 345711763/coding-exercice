/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let long;
    let short;
    let ans = ""
    if (a.length < b.length) {
        short = a;
        long = b;
    } else {
        long = a;
        short = b
    }
    let diff = long.length - short.length
    for (let i = 0; i < diff; i++) {
        short = '0' + short;
    }
    let carry = 0;
    for (let i = long.length-1; i >=0; i--) {
        const sum = parseInt(short[i]) + parseInt(long[i]) + carry
        if (sum >= 2) {
            carry = 1;
            ans = `${sum % 2}` + ans;
        } else {
            carry = 0;
            ans = `${sum}` + ans
        }
    }
    if (carry === 1) {
        ans = '1' + ans;
    }
    return ans
};

console.log(addBinary("1", "111"))