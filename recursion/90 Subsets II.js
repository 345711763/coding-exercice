/**
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,2]
 * Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 * Example 2:
 *
 * Input: nums = [0]
 * Output: [[],[0]]
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort();
    const result = [];
    const path = [];
    const used = new Array(nums.length).fill(0);
    function backtrack(startIndex) {
        result.push([...path])
        for (let i = startIndex; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1] && used[i-1] === 0) { // cut duplicate
                continue;
            }
            path.push(nums[i]);
            used[i] = 1
            backtrack(i+1);
            used[i] = 0
            path.pop();
        }
    }
    backtrack(0);
    return result;
};