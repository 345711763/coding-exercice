/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const dp = [];
    // dp[i] 表示到第i个字符位置，有多少种解法
    if (s[0] === "0") {
        return 0;
    } else {
        dp[0] = 1
    }
    if (s[0] === '1') {
        if (s[1] !== '0') {
            dp[1] = 2
        } else {
            dp[1] = 1
        }
    } else if (s[0] === '2') {
        if (['1','2','3','4','5','6'].includes(s[1])) {
            dp[1] = 2
        } else {
            dp[1] = 1
        }
    } else {
        if (s[1] !== "0") {
            dp[1] = 1
        } else {
            dp[1] = 0
        }
    }
    for (let i = 2; i < s.length; i++) {
        let count = 0;
        if (s[i] !== "0") {
            count = count + dp[i-1]
        }
        if (s[i-1] === '1' || (s[i-1] === '2') && ['0', '1','2','3','4','5','6'].includes(s[i])) {
            count = count + dp[i-2]
        }
        dp[i] = count
    }
    return dp[s.length - 1];
};