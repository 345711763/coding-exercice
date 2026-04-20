/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let cover = 0;
    if (nums.length === 1) {
        return true;
    }
    for (let i = 0; i < nums.length; i++) {
        if (i > cover) {
            return false;
        }
        cover = Math.max(cover, i + nums[i])
    }
    if (cover >= nums.length - 1) {
        return true
    }
    return false;
};