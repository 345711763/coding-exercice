/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    return _validPalindrome(s, 0, s.length - 1, 1)
};

function _validPalindrome(s, start, end, chanceLeft) {
    let left = start;
    let right = end;
    while(left <= right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            if (chanceLeft >= 1) {
                return _validPalindrome(s, left+1, right, chanceLeft - 1) || _validPalindrome(s, left, right-1, chanceLeft - 1)
            } else {
                return false;
            }
        }
    }
    return true;
}

validPalindrome('abc')