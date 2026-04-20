/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
}

var serialize = function(root) {
    if (root === null) return [];
    let res = [];
    function traverse(root) {
        if (root === null) {
            res.push('#');
            return;
        }
        res.push(root.val);
        traverse(root.left);
        traverse(root.right);
    }

    traverse(root);
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data.length === 0) return null;
    const list = data.split(',');
    function helper() {
        let current = list[0];
        if(current === '#') {
            list.shift();
            return null;
        }
        const node = new TreeNode(current);
        list.shift();
        node.left = helper();
        node.right = helper();
        return node;
    }
    return helper();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(5);

const serial = serialize(tree);
console.log(serial);
const de = deserialize(serial);
// console.log(de.val);
// console.log(de.left);
// console.log(de.right);

console.log(serialize(de));