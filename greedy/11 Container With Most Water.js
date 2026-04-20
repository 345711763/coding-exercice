/**
 * @param {number[]} height
 * @return {number}
 * use two pointer to find the max area
 * move the pointer with smaller height
 * Time Complexity: O(n)
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let result = -Infinity;
    while(left < right) {
        result = Math.max(result, (right - left) * Math.min(height[left], height[right]));
        if (height[right] < height[left]) {
            right--
        } else {
            left++
        }
    }
    return result;
};