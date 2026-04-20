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
 * @return {number}
 */
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
 * @return {number}
 * 使用完全二叉树的性质，如果左子树深度等于右子树深度，则当前节点为完全二叉树，直接计算节点数 2^n - 1，n为树的深度
 */
var countNodes = function(root) {
    function count(root) {
        if (root === null) return 0;
        let left = root.left;
        let leftDepth = 1;
        let right = root.right;
        let rightDepth = 1;
        while(left) {
            left = left.left;
            leftDepth++
        }
        while(right) {
            right = right.right;
            rightDepth++
        }
        if (leftDepth === rightDepth) {
            // is a complete binary tree, a complete binary tree has 2^n - 1 nodes, n is the depth of the tree
            return Math.pow(2, leftDepth) - 1
        }
        return count(root.left) + count(root.right) + 1
    }
    return count(root)
};