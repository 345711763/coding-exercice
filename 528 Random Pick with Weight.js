/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.sums = new Array(w.length)
    this.sums[0] = w[0];
    for (let i = 1; i < w.length; i++) {
        this.sums[i] = this.sums[i-1] + w[i]
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const num = Math.random() * this.sums[this.sums.length-1];
    // binary search
    let left = 0;
    let right = this.sums.length;
    while(left + 1 < right) {
        const mid = Math.floor((left+right) / 2)
        if (this.sums[mid] === num) {
            return mid;
        }
        if (this.sums[mid] > num) {
            right = mid;
        } else {
            left = mid;
        }
    }
    if (num > this.sums[left]) {
        return right;
    } else {
        return left;
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */