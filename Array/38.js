function RLE(str) {
    let ans = ""
    let current = 1
    let count = 1
    let char = str[0]
    while(current < str.length) {
        if (char === str[current]) {
            count++
        } else {
            ans += `${count}${char}`
            count = 1
            char = str[current]
        }
        current++
    }
    ans += `${count}${char}`
    return ans

}
var countAndSay = function(n) {
    let current = ''
    for(let i = 1; i<=n; i++) {
        if (i === 1) {
            current = '1'
        } else {
            current = RLE(current)
        }
    }
    return current;
    // return RLE(countAndSay(n-1))
};

console.log(countAndSay((4)))