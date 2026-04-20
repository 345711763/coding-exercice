/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) return null;
    const root = new TreeNode(postorder[postorder.length - 1]);
    const mid = inorder.findIndex((val) => val === root.val);
    root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid))
    root.right = buildTree(inorder.slice(mid + 1), postorder.slice(mid, postorder.length - 1))
    return root;
};