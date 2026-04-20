/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
function dfs(node, sum, targetSum, chain, ans) {
    if (node.left === null && node.right === null) {
        if ((sum + node.val) === targetSum) {
            chain.push(node.val);
            ans.push([...chain]);
            chain.pop();

        }
    }

    if (node.left !== null) {
        chain.push(node.val);
        dfs(node.left, sum+node.val, targetSum, chain, ans);
        chain.pop()
    }
    if (node.right !== null) {
        chain.push(node.val);
        dfs(node.right, sum+node.val, targetSum, chain, ans);
        chain.pop()
    }
}
var pathSum = function(root, targetSum) {
    if (root === null) {
        return [];
    }
    const ans = [];
    dfs(root, 0, targetSum, [], ans);
    return ans;
};