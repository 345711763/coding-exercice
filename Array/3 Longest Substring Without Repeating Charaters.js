/**
 * @param {string} s
 * @return {number}
 * use sliding window approach,
 * define left and right pointer, to represent the window
 * move right point to the next character
 * if the new window does not contain duplicate character, update result
 * if not update left pointer and update result
 *
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0
    }
    let left = 0;
    let right = 0;
    let result = -Infinity;
    const map = new Map()
    while(right < s.length) {
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1
        }
        result = Math.max(result, right - left + 1);
        map.set(s[right], right);
        right++
    }
    return result;
};