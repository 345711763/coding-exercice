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
 * @return {number[]}
 * recursive approach:
 */
var preorderTraversal = function(root) {
    const result = [];
    function traverse(root) {
        if (root === null) {
            return;
        }
        result.push(root.val)
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root)
    return result;
};

// iterative approach:

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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (root === null) {
        return []
    }
    const stack = [root];
    const result = [];
    while(stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }
    return result;
};