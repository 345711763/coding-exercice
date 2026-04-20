/**
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
 *
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 * Example 1:
 *
 * Input: candidates = [10,1,2,7,6,1,5], target = 8
 * Output:
 * [
 * [1,1,6],
 * [1,2,5],
 * [1,7],
 * [2,6]
 * ]
 * Example 2:
 *
 * Input: candidates = [2,5,2,1,2], target = 5
 * Output:
 * [
 * [1,2,2],
 * [5]
 * ]
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a-b)
    const result = [];
    const path = [];
    function backtrack(startIndex, sum) {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            result.push([...path])
            return
        }
        for (let i = startIndex; i < candidates.length; i++) {
            if (i > startIndex && candidates[i] === candidates[i-1]) {
                continue
            }
            path.push(candidates[i])
            backtrack(i+ 1, sum + candidates[i])
            path.pop()
        }
    }
    backtrack(0, 0)
    return result;
};