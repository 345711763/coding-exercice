/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Similar to 26. Remove Duplicates from Sorted Array， 快慢指针法
 */
var removeElement = function(nums, val) {
    let slow = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[slow] = nums[i]
            slow++
        }
    }
    return slow
};