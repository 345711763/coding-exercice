/**
 * @param {number} n
 * @return {number}
 */
function dfs(current, n, ans) {
    if (current === n) {
        ans.count++;
        return
    }
    dfs(current+1, n, ans)
    dfs(current+2, n, ans)
}
var climbStairs = function(n) {
    const ans= {
        count: 0
    }
    dfs(0, n, ans)
    return ans.count;
};

console.log(climbStairs(2))