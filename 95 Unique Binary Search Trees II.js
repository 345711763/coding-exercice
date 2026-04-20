/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    function generate(left, right) {
        if (left > right) {
            return [null]
        }
        const res = []
        for (let i = left; i <= right; i++) {
            const leftTrees = generate(left, i-1);
            const rightTrees = generate(i+1, right);
            for (const leftTree of leftTrees) {
                for (const rightTree of rightTrees) {
                    const root = new TreeNode(i);
                    root.left = leftTree;
                    root.right = rightTree;
                    res.push(root)
                }
            }
        }
        return res;
    }
    return generate(1, n);
};

console.log(generateTrees(3))