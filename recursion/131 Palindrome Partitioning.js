/**
 * Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 * Example 2:
 *
 * Input: s = "a"
 * Output: [["a"]]
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];
    const path = [];
    function backtrack(startIndex) {
        if (startIndex >= s.length) {
            result.push([...path]);
        }
        for (let i = startIndex; i < s.length; i++) {
            // 想象每次切割字符串，从startIndex到i+1, 循环遍历不同的切法
            const sub = s.substring(startIndex, i+1)
            if (isPalindrome(sub)) {
                path.push(sub);
                backtrack(i+1);
                path.pop()
            }
        }
    }
    backtrack(0);
    return result;
};

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        } else {
            left++
            right--
        }
    }
    return true
}