/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    const path = []
    function backtracking(startIndex, sum) {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            result.push([...path])
            return;
        }
        for (let i = startIndex; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtracking(i, sum+candidates[i]);
            path.pop();
        }
    }
    backtracking(0, 0)
    return result;
};