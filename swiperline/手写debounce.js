async function delay(ms) {
    await new Promise(resolve => setTimeout(resolve, ms))
}
function debounce(fn, ms) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout) // Passing an invalid ID to clearTimeout() silently does nothing; no exception is thrown.
        timeout = setTimeout(() => {
            fn.apply(this, args) // 绑定一下this, 如果不绑定的话, setTimeout 里面调用fn, fn 中的this是全局对象
        }, ms);
    }
}

function throttle(fn, ms) {
    let throttling = false;
    return function(...args) {
        if (!throttling) {
            throttling = true
            setTimeout(() => {
                throttling = false
            }, ms)
            fn.apply(this, args)
        }
    }
}
const obj = {
    name: "dtx",
    printName: function() {
        console.log(this.name)
    }
}
// obj.printName = debounce(obj.printName, 1000)
// obj.printName()
obj.printName = throttle(obj.printName, 1000)
obj.printName()
const a = debounce(() => {
    console.log(1)
}, 1000)

async function main() {
    a()
    await delay(2000)
    a()
    a()
}

const b = throttle(() => {
    console.log(2)
}, 1000)
async function main2() {
    b()
    b()
    b()
}

// main()
main2()