function getPreferredResponse(promises) {
    return new Promise((resolve, reject) => {
        const states = new Array(promises.length); // undefined = is loading, true -> succeed, false -> failed
        const results = new Array(promises.length);
        function tryReturn() {
            for (let j = 0; j < states.length; j += 1) {
                if (states[j] === undefined) {
                    break; // there is still a high-priority task loading
                }
                if (states[j] === true) {
                    resolve(results[j]); // return result from the task with the highest priority;
                }
            }
        }
        for (let i = 0; i < promises.length; i += 1) {
            const taskIndex = i;
            promises[i].then(res => {
                // 更新状态
                results[taskIndex] = res;
                states[taskIndex] = true;
                // 查看当前是否可以返回结果
                tryReturn();
            }).catch(() => {
                states[taskIndex] = false;
                tryReturn();
                let hasAllFailed = true;
                for (let i = 0; i < states.length; i += 1) {
                    if (states[i] !== false) {
                        hasAllFailed = false;
                        break;
                    }
                }
                if (hasAllFailed) {
                    reject(new Error("All failed"));
                }
            });
        }
    })
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject()
    }, 7000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('a')
    }, 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('b')
    }, 2000)
})
const promises = [p1, p2, p3]
const res = getPreferredResponse(promises).then(res => console.log(res)).catch(err => console.log(err));