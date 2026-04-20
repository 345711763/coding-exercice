/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    for (let i = digits.length-1; i >= 0; i--) {
        const sum = carry + digits[i]
        if (sum >= 10) {
            digits[i] = sum % 10;
            carry = 1
        } else {
            digits[i] = sum;
            carry = 0;
        }
    }
    if (carry) {
        digits.unshift(1)
    }
    return digits;
};