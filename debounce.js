function debounce(fn, time) {
    let id;
    let lastArgs
    let lastThis
    function _debounce(...args) {
        clearTimeout(id);
        let that = this;
        lastThis = that;
        lastArgs = args;
        id = setTimeout(function(){
            fn.apply(that, args);
        }, time);
    }
    // 加入一个cancel功能
    _debounce.cancel = function() {
        clearTimeout(id);
        lastArgs = null;
        lastThis = null;
        id = null;
    }
    // 加入一个flush功能立刻执行当前的timeout
    _debounce.flush = function() {
        if (id) {
            clearTimeout(id);
        }
        fn.apply(lastThis, lastArgs);
        lastArgs = null;
        lastThis = null;
        id = null;
    }
    return _debounce;
}

let count = 0;
const fn = debounce(function () {
    count++;
    console.log(count);
}, 2000);
fn()
fn()
fn.flush()
// fn.cancel()
