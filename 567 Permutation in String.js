/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
    const freqMap = new Map();
    for (let s of s1) {
        freqMap.set(s, (freqMap.get(s) || 0) + 1)
    }
    let left = 0;
    for (let right = 0; right < s2.length; right++) {
        freqMap.set(s2[right], (freqMap.get(s2[right]) || 0) - 1)
        if (right - left + 1 < s1.length) continue;
        if (right - left + 1 > s1.length) {
            freqMap.set(s2[left], (freqMap.get(s2[left]) || 0) + 1)
            left++
        }
        let result = true
        for (const [key, value] of freqMap) {
            if (value !== 0) {
                result = false
                break;
            }
        }
        if (result) {
            return true
        }
    }
    return false;
}

console.log(checkInclusion('ab', 'lecabee'))