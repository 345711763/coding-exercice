/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Similar to 15. 3Sum
 */
var threeSumClosest = function(nums, target) {
    let result = Infinity;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1, right = nums.length - 1;
        if (i > 0 && nums[i] === nums[i-1]) continue;
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }
            if (sum < target) {
                left++
            }
            if (sum > target) {
                right--
            }
            if (sum === target) {
                return target;
            }
        }
    }
    return result;
};