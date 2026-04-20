/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    if (isStrictlyIncreasing(nums)) return true;

    for (let i = 0; i < nums.length; i++) {
        let _nums = nums;
        _nums.splice(i, 1);
        if (isStrictlyIncreasing(_nums)) return true;
    }

    return false;
};

function isStrictlyIncreasing(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }
    return true
}


/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    const [x1 , y1] = points[0];
    const [x2, y2] = points[1];
    const [x3, y3] = points[2];
    if (
        (x1 === x2 && y1 === y2) ||
        (x1 === x3 && y1 === y3) ||
        (x3 === x2 && y3 === y2)
    )
    {
        return false
    }
    // points.sort((a,b) => a[0] - b[0]);
    let sin1 = getSin(points[0], points[1]);
    let sin2 = getSin(points[0], points[2]);
    console.log(sin1, sin2);
    if (sin1 === sin2) {
        return false;
    }
    return true
};

function getSin([x1, y1], [x2, y2]) {
    return (y2-y1) / (x2-x1)
}

isBoomerang(
    [[73,31],[73,19],[73,45]])