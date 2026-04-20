/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target <= nums[0]) {
        return 0
    }
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (right - left === 1) {
            return mid + 1
            break;
        }
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid
        } else if (nums[mid] > target) {
            right = mid
        }
    }
};