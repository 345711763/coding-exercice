/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * Example 1:
 *
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * Example 2:
 *
 * Input: nums = [0]
 * Output: [[],[0]]
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    const path = [];
    function backtrack(startIndex) {
        result.push([...path])
        if (startIndex >= nums.length) {
            return
        }
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i+1);
            path.pop()
        }
    }
    backtrack(0)
    return result;
};