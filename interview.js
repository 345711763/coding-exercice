function canVisitAll(root, targets) {
    const parent = new Map();
    const nodes = new Map(); // val -> node reference

    function build(node, p = null) {
        if (!node) return;
        parent.set(node.val, p);
        nodes.set(node.val, node);
        build(node.left, node);
        build(node.right, node);
    }

    build(root);

    // Track: from each node, which child subtrees have been entered
    const usedChildren = new Map();

    function markUsed(from, to) {
        if (!usedChildren.has(from)) {
            usedChildren.set(from, new Set());
        }
        const set = usedChildren.get(from);

        if (set.has(to)) {
            return false; // already entered this subtree before ❌
        }

        set.add(to);
        return true;
    }

    // Build path between two nodes using parent pointers
    function getPath(a, b) {
        const pathA = [];
        while (a) {
            pathA.push(a.val);
            a = parent.get(a.val);
        }

        const pathB = [];
        while (b) {
            pathB.push(b.val);
            b = parent.get(b.val);
        }

        // find LCA
        let i = pathA.length - 1;
        let j = pathB.length - 1;

        while (i >= 0 && j >= 0 && pathA[i] === pathB[j]) {
            i--;
            j--;
        }

        const lca = pathA[i + 1];

        const path = [
            ...pathA.slice(0, i + 1),
            lca,
            ...pathB.slice(0, j + 1).reverse(),
        ];

        return path;
    }

    let current = root;

    for (const targetVal of targets) {
        const target = nodes.get(targetVal);
        const path = getPath(current, target);

        // Walk path and enforce subtree rule
        for (let i = 0; i < path.length - 1; i++) {
            const from = path[i];
            const to = path[i + 1];

            const fromNode = nodes.get(from);

            // Only care about DOWNWARD moves (parent → child)
            if (
                (fromNode.left && fromNode.left.val === to) ||
                (fromNode.right && fromNode.right.val === to)
            ) {
                if (!markUsed(from, to)) {
                    return false;
                }
            }
        }

        current = target;
    }

    return true;
}

function Node(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new Node('apple');
root.left = new Node('banana');
root.right = new Node('cream');
root.right.left = new Node('yes');
root.right.right = new Node('are');
root.right.left.left = new Node('right');
root.right.left.right = new Node('no');
root.right.left.right.left = new Node('left');
root.right.left.right.right = new Node('middle')

console.log(canVisitAll(root, ['left', 'right', 'middle']))
console.log(canVisitAll(root, ['left', 'middle', 'right']))