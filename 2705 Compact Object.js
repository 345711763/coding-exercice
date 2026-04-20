const input = obj =
    {
        "o":11,
        "a":68,
        "m":18,
        "v":true,
        "b":false,
        "h":null,
        "r":false,
        "p":93,
        "l":true,
        "k":"",
        "n":79,
        "f":18,
        "u":null,
        "j":null,
        "e":null,
        "z":{
            "d":true,
            "t":null,
            "o":21,
            "w":null,
            "m":82,
            "k":35,
            "l":26,
            "r":45,
            "b":false,
            "z":0,
            "i":null,
            "c":33,
            "p":69,
            "j":27,
            "e":53,
            "q":97,
            "h":true,
            "a":true,
            "n":true,
            "f":73,
            "u":null
        },
        "w":12,
        "y":0,
        "q":"",
        "t":null,
        "s":true,
        "x":false,
        "c":true,
        "i":false,
        "g":29
    }
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }
    if (isObject(obj)) {
        let result = {}
        for (const key in obj) {
            const compacted = compactObject(obj[key]);
            if (Boolean(compacted)) { // only add truthy results
                result[key] = compacted;
            }
        }
        return result
    }
    return obj
};
function isObject(obj) {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj)
}
console.log(compactObject(input))
