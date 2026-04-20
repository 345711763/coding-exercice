/**
 * You are given a 0-indexed array of integers nums of length n. You are initially positioned at index 0.
 *
 * Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at index i, you can jump to any index (i + j) where:
 *
 * 0 <= j <= nums[i] and
 * i + j < n
 * Return the minimum number of jumps to reach index n - 1. The test cases are generated such that you can reach index n - 1.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * Example 2:
 *
 * Input: nums = [2,3,0,1,4]
 * Output: 2
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 104
 * 0 <= nums[i] <= 1000
 * It's guaranteed that you can reach nums[n - 1].
 * @param {number[]} nums
 * @return {number}
 */
// 贪心算法，争取每次跳使得覆盖范围最大
var jump = function(nums) {
    if (nums.length === 1) {
        return 0;
    }
    let i = 0;
    let jump = 0;
    let cover = nums[0];
    while(cover < nums.length - 1) {
        let maxCover = 0;
        let next = 0;
        for (let j = i +1; j <= cover; j++) {
            maxCover = Math.max(maxCover, j + nums[j]);
            next= j
        }
        cover = maxCover;
        jump++;
        i = next;
    }
    return jump + 1;
};

console.log(jump([1,1,1,1]))