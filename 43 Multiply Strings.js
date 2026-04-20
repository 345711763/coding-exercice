var multiply = function(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return "0"
    }
    const result = new Array(num1.length + num2.length).fill(0);
    for (let i = num1.length-1; i>=0; i--) {
        for (let j = num2.length-1; j>=0; j--) {
            const sum = num1[i] * num2[j] + result[i+j+1];
            result[i+j+1] = sum % 10;
            result[i+j] += Math.floor(sum / 10);
        }
    }

    // remove leading zeros
    let i = 0;
    while (i < result.length) {
        if (result[i] === 0) {
            i++
        } else {
            break;
        }
    }
    return result.slice(i).join("");
};

console.log(multiply("99", "999"))