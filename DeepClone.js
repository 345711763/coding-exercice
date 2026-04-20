// function deepClone(value) {
//     const cache = new WeakMap();
//     function _deepClone(value) {
//         if (typeof value !== 'object' || value === null) {
//             return value;
//         }
//         if (cache.has(value)) {
//             return cache.get(value)
//         }
//         const result = Array.isArray(value) ? [] : {}
//         cache.set(value, result);
//         for(let key in value) {
//             if (value.hasOwnProperty(key)) {
//                 result[key] = _deepClone(value[key])
//             }
//         }
//         return result;
//     }
//
//     return _deepClone(value)
// }

// function deepClone(value) {
//     const weakMap = new WeakMap();
//     function _deepClone(value) {
//         if (typeof value !== 'object' || value === null) {
//             return value;
//         }
//         if (weakMap.has(value)) {
//             return weakMap.get(value);
//         }
//         const result = Array.isArray(value) ? [] : {};
//         weakMap.set(value, result);
//         for (let key in value) {
//             if (value.hasOwnProperty(key)) {
//                 result[key] = _deepClone(value[key]);
//             }
//         }
//         return result;
//     }
//     return _deepClone(value);
// }
function deepClone(obj) {
    const weakMap = new WeakMap();
    function _deepClone(obj) {
        if (typeof obj !== 'object' || obj === null) return obj;
        if (weakMap.has(obj)) {
            return weakMap.get(obj);
        }
        let result = Array.isArray(obj) ? [] : {};
        weakMap.set(obj, result);
        for (let key in obj) {
            if (!obj.hasOwnProperty(key)) continue;
            result[key] = _deepClone(obj[key]);
        }
        return result;
    }
    return _deepClone(obj);
}
const obj = {
    arr: [1,2,3],
    a: 4
}

obj.sub = obj;
obj.arr.push(obj)
const newObj = deepClone(obj);
console.log(newObj)
console.log(obj.arr !== newObj.arr); // true
console.log(obj.a === newObj.a); // true
console.log(obj.sub !== newObj.sub);
console.log(newObj.arr[3] !== obj);
console.log(newObj.arr[3] === newObj);
