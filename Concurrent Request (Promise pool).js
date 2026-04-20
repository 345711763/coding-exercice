async function concurrentRequest(tasks, option = 5) {
    return new Promise((resolve, reject) => {
        const results = [];
        let currentIndex = 0; // the index of the last task
        let fulfilledCount = 0;
        function runTask(index) {
            const task = tasks[index];
            task().then(result => {
                results[index] = result;
                fulfilledCount++;
                if (fulfilledCount === tasks.length) {
                    resolve(results);
                } else if (currentIndex < tasks.length) {
                    // run next task
                    runTask(currentIndex);
                    currentIndex++;
                }
            }).catch((error) => {
                reject(error)
            })
        }
        for (let i = 0; i < Math.min(option, tasks.length); i++) {
            runTask(currentIndex);
            currentIndex++;
        }
    })
}

const t1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('1');
        resolve()
    }, 1000)
})
const t2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('2');
    }, 5000)
})
const tasks = [
    () => new Promise(res => setTimeout(() => {
        console.log('1');
        res(1)
    }, 3000)), // task0
    () => new Promise(res => setTimeout(() => {
        console.log('2');
        res(2)
    }, 1000)), // task1
    () => new Promise(res => setTimeout(() => {
        console.log('3')
        res(3)
    }, 2000)), // task2
];
concurrentRequest(tasks, 1)