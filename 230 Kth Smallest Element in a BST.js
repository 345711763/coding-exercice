/**
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * Instead of building a full-inorder traversal list, use a counter to keep track of how many nodes has no left child so far
 **/
var kthSmallest = function(root, k) {
    let result;
    inorderTraverse(root)
    return result;
    function inorderTraverse(root) {
        if (root === null) return;
        inorderTraverse(root.left, result);
        k--;
        if (k === 0) {
            result = root.val;
            return
        }
        inorderTraverse(root.right, result);
    }
};
