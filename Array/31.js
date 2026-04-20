// function dfs(pb, now, map, all, totalLength) {
//     if (now.length === totalLength) {
//         all.push([...now]);
//         return;
//     }
//     for (const num of pb) {
//         if (map.get(num) === 0) {
//             continue;
//         }
//         map.set(num, map.get(num) - 1);
//         now.push(num);
//         dfs(pb, now, map, all, totalLength);
//         now.pop();
//         map.set(num, map.get(num) + 1);
//     }
// }
// var nextPermutation = function(nums) {
//     const sorted = [...nums].sort();
//     const pb = [];
//     const all = [];
//     const map = new Map();
//     for (const num of sorted) {
//         if (map.get(num) === undefined) {
//             map.set(num, 1);
//             pb.push(num);
//         } else {
//             map.set(num, map.get(num) + 1);
//         }
//     }
//     dfs(pb, [], map, all, nums.length);
//     console.log(all);
//     const index = all.findIndex((arr) => {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] !== nums[i]) {
//                 return false
//             }
//         }
//         return true;
//     });
//     console.log(index);
//     if (index === (all.length - 1)) {
//         for (let i = 0; i < nums.length; i++) {
//             nums[i] = all[0][i];
//         }
//     } else {
//         for (let i = 0; i < nums.length; i++) {
//             nums[i] = all[index+1][i]
//         }
//     }
//     return nums;
// };


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Scan from right to left
 * Find the first index i where
 * nums[i] < nums[i + 1]
 * (this is the “pivot” — where we can increase the number).
 *
 * If no such index exists
 * The array is in descending order → reverse it and you’re done.
 *
 * Find the rightmost number larger than nums[i]
 * Scan from the end to find index j where
 * nums[j] > nums[i].
 *
 * Swap nums[i] and nums[j]
 *
 * Reverse everything to the right of i
 * This gives the smallest possible tail after the swap.
 * O(n) time, O(1) space
 */
var nextPermutation = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === 0) {
            nums.reverse()
            return nums;
        }
        if (nums[i] > nums[i-1]) {
            const temp = nums[nums.length - 1];
            nums[nums.length - 1] = nums[i-1];
            nums[i-1] = temp;
            reverse(nums, i, nums.length - 1);
            return nums;
        }
    }
};

function reverse(arr, start, end) {
    while(start<end) {
        const temp = arr[end];
        arr[end]= arr[start]
        arr[start] = temp;
        start++
        end--
    }
    return arr
}

console.log(nextPermutation([1, 3, 2]));