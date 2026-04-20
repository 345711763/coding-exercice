/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];
    const path = [];
    let count = 0;
    function backtrack(startIndex, count) {
        if (count >= 3) {
            const lastChunk = s.substring(startIndex, s.length)
            if (isValid(lastChunk)) {
                path.push(lastChunk);
                result.push(path.join('.'))
                path.pop()
            }
            return
        }
        for(let i = startIndex; i < s.length; i++) {
            const partition = s.substring(startIndex, i+1)
            if (isValid(partition)) {
                path.push(partition);
                backtrack(i+1, count+1)
                path.pop()
            }
        }
    }
    backtrack(0, 0)
    return result;
};

function isValid(s) {
    if (s.length > 1 && s[0] === "0") {
        return false
    }
    const num = parseInt(s)
    if (num <= 255 && num >= 0) {
        return true
    }
    return false
}