/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [[]];
    const path = [];
    nums.sort((a, b) => a - b);
    function backtrack(startIndex) {
        if (startIndex > nums.length - 1) {
            return
        }
        for (let i = startIndex; i < nums.length; i++) {
            if (i !== startIndex && nums[i] === nums[i-1]) {
                continue
            }
            path.push(nums[i]);
            result.push([...path]);
            backtrack(i+1)
            path.pop()
        }
    }
    backtrack(0);
    return result;
};