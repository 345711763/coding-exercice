// 169 Majority Element

var majorityElement = function(nums) {
    const dict = {

    };

    for(const num of nums) {
        if (dict[num] === undefined) {
            dict[num] = 1;
        } else {
            dict[num]++;
        }
    }

    let max = null;
    for(let key in dict) {
        if(max === null || dict[key] > dict[max]) {
            max = key;
        }
    }

    return key;
};


console.log(majorityElement([3,2,3]))