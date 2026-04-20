/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0;
    let j = 0;
    while(i < s.length && j < p.length) {
        if (s[i] === p[j] || p[j] === '?') {
            i++;
            j++
        } else if (p[j] === '*') {
            let hasMatch = false;
            for (let x = i; x < s.length; x++) {
                hasMatch = isMatch(s.substring(x), p.substring(j+1))
                if (hasMatch) {
                    return true
                }
            }
            return false;
        } else if (s[i] !== p[j]) {
            break;
        }
    }
    if (i === s.length && j === p.length) {
        return true
    } else {
        return false;
    }
};

isMatch("acdcb", "a*c?b")