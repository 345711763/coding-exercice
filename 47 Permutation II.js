/**
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,1,2]
 * Output:
 * [[1,1,2],
 *  [1,2,1],
 *  [2,1,1]]
 * Example 2:
 *
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const used = new Array(nums.length).fill(false);
    const result = [];
    const path = []
    function backtrack() {
        if (path.length === nums.length) {
            result.push([...path])
            return
        }
        const set = new Set()
        for (let i = 0; i < nums.length; i++) {
            if (used[i] || set.has(nums[i])) {
                continue
            }
            path.push(nums[i])
            set.add(nums[i]);
            used[i] = true;
            backtrack();
            used[i] = false;
            path.pop()
        }
    }
    backtrack();
    return result;
};