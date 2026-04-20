/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    return binarySearch(nums, left, right ,target);
};

function binarySearch(nums, left, right, target) {
    let startIndex = -1, endIndex = -1;
    let targetIndex = -1;
    while(left <= right) {
        const mid = Math.floor((left+right) / 2);
        if (nums[mid] === target) {
            targetIndex = mid;
            break;
        }
        if (target < nums[mid]) {
            right = mid - 1;
            continue
        }
        if (target > nums[mid]) {
            left = mid + 1;
            continue
        }
    }
    startIndex = targetIndex;
    endIndex = targetIndex;
    if (targetIndex > left && nums[targetIndex - 1] === target) {
        startIndex = binarySearch(nums, left, targetIndex - 1, target)[0];
    }
    if (targetIndex < right && nums[targetIndex + 1] === target) {
        endIndex = binarySearch(nums,targetIndex + 1, right, target)[1]
    }
    return [startIndex, endIndex]
}
console.log(searchRange([5,7,7,8,8,10], 8))