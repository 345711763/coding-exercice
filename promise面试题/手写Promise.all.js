Promise.myAll = function(proms) {
    let rej, res
    const p = new Promise((resolve, reject) => {
        res = resolve
        rej = reject
    });
    const results = [];
    let i = 0
    let count = 0
    let fullFilledCount = 0
    for (let prom of proms) {   // 传入的可能不紧紧可能是array,还有可能是 set或者 其他实现了iterator的对象
        let index = i;
        i++
        count++;
        Promise.resolve(prom)   // 传入的prom 可能是常量或者Promise对象,统一包装一下方便处理
            .then((data) => {
            results[index] = data;
            fullFilledCount++;
            if (count === fullFilledCount) {
                res(results)
            }
        }, rej)
    }
    if (count === 0) {
        res([])
    }
    return p;
}

const p1 = new Promise((res) => {
    setTimeout(() => {
        res(1)
    }, 1000)
})
const p2 = new Promise((res) => {
    setTimeout(() => {
        res(2)
    }, 500)
})
const p3 = new Promise((res) => {
    setTimeout(() => {
        res(3)
    }, 100)
})

async function all(promises) {
    return new Promise((resolve, reject) => {
        const results = []
        let i = 0;
        let fullFilledCount = 0;
        for (let promise of promises) {
            promise = Promise.resolve(promise)
            const index = i;
            promise.then(res => {
                results[index] = res;
                fullFilledCount++;
                if (fullFilledCount === promises.length) {
                    resolve(results)
                }
            }).catch(error => reject(error));
            i++;
        }
    })
}

all([new Promise((resolve) => setTimeout(() => resolve(1), 2000)),2,3]).then((results) => { console.log(results) })
