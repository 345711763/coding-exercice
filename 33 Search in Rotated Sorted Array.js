// binary search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     if (nums.length === 0) {
//         return -1
//     }
//     let left = 0, right = nums.length - 1;
//     while(left <= right) {
//         const mid = Math.floor((left+ right) / 2);
//         if (nums[mid] === target) {
//             return mid;
//         }
//         // check if the left of mid point is asc order
//         if (nums[left] <= nums[mid]) {
//             if (target <= nums[mid] && target >= nums[left]) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1
//             }
//         } else {
//             if (target >= nums[mid] && target <= nums[right]) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//     }
//     return -1;
// };

// binary search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        // mid is at left segment
        if (nums[mid] > nums[nums.length - 1]) {
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                if (target > nums[nums.length - 1]) {
                    right = mid - 1;
                } else if (target < nums[nums.length - 1]) {
                    left = mid + 1
                } else {
                    return nums.length - 1
                }
            } else {
                return mid;
            }
        } else if (nums[mid] < nums[nums.length - 1]) {
            // mid is at right segment
            if (nums[mid] < target) {
                if (target < nums[nums.length - 1]) {
                    left = mid + 1
                } else if (target > nums[nums.length - 1]) {
                    right = mid - 1;
                } else {
                    return nums.length - 1;
                }
            } else if (nums[mid] > target) {
                right = mid -1;
            } else {
                return mid;
            }
        } else {
            // there is only one element left
            if (nums[mid] !== target) {
                return -1
            } else {
                return mid;
            }
        }
    }
    return -1;
};

console.log(search([1], 0))