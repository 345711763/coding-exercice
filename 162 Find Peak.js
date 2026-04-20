/**
 * A peak element is an element that is strictly greater than its neighbors.
 *
 * Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
 *
 * You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
 *
 * You must write an algorithm that runs in O(log n) time.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,1]
 * Output: 2
 * Explanation: 3 is a peak element and your function should return the index number 2.
 * Example 2:
 *
 * Input: nums = [1,2,1,3,5,6,4]
 * Output: 5
 * Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 1000
 * -231 <= nums[i] <= 231 - 1
 * nums[i] != nums[i + 1] for all valid i.
 * @param {number[]} nums
 * @return {number}
 * Binary Search, the key is that we can use binary search to find the peak element because the array is guaranteed to have at least one peak element.
 * if the mid is greater than both its neighbors, then it must be the peak element.
 * if the mid is smaller than one of its neighbors, there is at least one peak element on the side where the mid is smaller.
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left+right) / 2);
        const leftValue = mid > 0 ? nums[mid - 1] : -Infinity;
        const rightValue = mid < nums.length - 1 ? nums[mid+1] : -Infinity;
        if (nums[mid] > leftValue && nums[mid] > rightValue) {
            return mid
        } else if (nums[mid] > leftValue) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
};