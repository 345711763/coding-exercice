var isValidBST = function(root) {
    function dfs(node, min, max) {
        if (node === null) {
            return true;
        }
        if (node.val >= max || node.val <= min) {
            return false;
        } else {
            return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
        }
    }

    return dfs(root, -Infinity, Infinity);
};