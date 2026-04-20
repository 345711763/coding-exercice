/**
 * @param {number[]} nums
 * @return {number[][]}
 * two pointers, 注意去重操作
 */
var threeSum = function(nums) {
    const result = []
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1, right = nums.length - 1;
        if (i > 0 && nums[i] === nums[i-1]) continue;
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left++
            }
            if (sum > 0) {
                right--
            }
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]])
                left++;
                right--;
                while(nums[left] === nums[left-1]) {
                    left++
                }
                while(nums[right] === nums[right+1]) {
                    right--
                }
            }
        }
    }
    return result;
};
// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b);
//     const res = [];
//     let i = 0;
//     while (i < nums.length - 2) {
//         if (i > 0 && nums[i] === nums[i-1]) {
//             i++
//             continue;
//         }
//         let leftover = 0 - nums[i];
//         let j = i + 1, k = nums.length - 1;
//         while(j < k) {
//             let sum = nums[j] + nums[k]
//             if (sum > leftover) {
//                 k--
//             } else if (sum < leftover) {
//                 j++
//             } else {
//                 res.push([nums[i], nums[j], nums[k]])
//                 while(j < k && nums[j] === nums[j+1]) j++;
//                 while(j < k && nums[k] === nums[k-1]) k--;
//                 j++;
//                 k--;
//             }
//         }
//         i++
//     }
//     return res;
// };

threeSum([-1,0,1,2,-1,-4])