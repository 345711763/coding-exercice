var combine = function(n, k) {
    const path = [];
    const result = []
    function backtrack(start) {
        if (path.length === k) {
            result.push([...path])
            return
        }
        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(i+1)
            path.pop();
        }
    }
    backtrack(1)
    return result;
};

console.log(combine(4, 2))