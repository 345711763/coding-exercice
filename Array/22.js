/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.



Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]


Constraints:

1 <= n <= 8
 */

function dfs(left, right, now, ans) {
    if (left === 0 && right === 0) {
        ans.push(now);
        return;
    }
    if (left > 0) {
        dfs(left - 1, right, now + '(', ans);
    }
    if (right > 0 && right > left) {
        dfs(left, right - 1, now + ')', ans);
    }
}
var generateParenthesis = function (n) {
    const ans = [];
    dfs(n, n, '', ans);
    return ans;
};
