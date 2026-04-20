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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return []
    }
    const queue = [root];
    const result = []
    let current = [];
    let count = 1
    while(queue.length > 0) {
        const node = queue.shift();
        count--
        current.push(node.val);
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
        if (count === 0) {
            result.push(current)
            current = [];
            count = queue.length // why this work is because when at the moment we finished one lvl, the queue will only have the node of the next lvl
        }
    }
    return result;
};