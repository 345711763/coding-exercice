/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    let slow = 0;
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i])
            nums[slow] = nums[i];
            slow++
        }
    }
    return slow;
};