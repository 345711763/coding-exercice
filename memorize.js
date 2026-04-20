// class MemorizeMap {
//     constructor() {
//         this._map = new Map();
//         this._weakMap = new WeakMap()
//     }
//     _isObject(value) {
//         return typeof value === 'object' && value !== null
//     }
//     has(key) {
//         if (this._isObject(key)) {
//             return this._weakMap.has(key)
//         } else {
//             return this._map.has(key)
//         }
//     }
//
//     set(key, value) {
//         if (this._isObject(key)) {
//             this._weakMap.set(key, value)
//         } else {
//             this._map.set(key, value)
//         }
//     }
//
//     get(key) {
//         if (this._isObject(key)) {
//             return this._weakMap.get(key)
//         } else {
//             return this._map.get(key)
//         }
//     }
// }
// function memorize(func, resolver) {
//     function memorized(...args) {
//         const key = resolver ? resolver(...args) : args[0]
//         const cache = memorized.cache;
//         if (cache.has(key)) {
//             return cache.get(key)
//         } else {
//             const result = func.apply(this, args);
//             cache.set(key, result)
//             return result;
//         }
//     }
//     memorized.cache = new MemorizeMap();
//     return memorized;
// }
//
// var object =  { a: 1, b: 2 };
// var other = { c: 3, d: 4 }
// var values = memorize((obj) => Object.values(obj))
// console.log(values(object))
// // -> [1,2]
// console.log(values(other))
// // -> [3,4]
// object.a = 2
// console.log(values(object));
// // -> [1,2]
//
// // Modify the result cache
// values.cache.set(object, ['a', 'b']);
// console.log(values(object));
// // => ['a', 'b']


function memorize(fn) {
    let last = null;
    return function (...args) {
        if (last === null) {
            last = {};
            last.args = args;
            const res = fn(...args);
            last.result = res;
            return res;
        }
        let sameInput = true;
        for (let i = 0; i < args.length; i++) {
            if (last.args[i] !== args[i]) {
                sameInput = false;
                break;
            }
        }
        if (sameInput) {
            return last.result;
        }
        const res = fn(...args);
        last.args = args;
        last.result = res;
        return res;
    }
}

var object =  { a: 1, b: 2 };
var other = { c: 3, d: 4 }
var values = memorize((obj) => Object.values(obj))
console.log(values(object))
// -> [1,2]
// console.log(values(other))
// -> [3,4]
object.a = 2
console.log(values(object));
// -> [1,2]