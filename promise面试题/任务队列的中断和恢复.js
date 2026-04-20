/**
 * 依次顺序执行一系列任务
 * 所有任务全部完成后得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务，pause用于暂停任务
 * 每个任务具有原子性，即不可中断，只能在两个任务之间中断
 */

function processTasks(tasks) {
    let isRunning = false
    const results = []
    let i = 0
    return {
        start: function() {
            console.log("开始运行")
            return new Promise(async (resolve, reject) => {
                // 如果当前已经在运行了，不要重复运行
                if (isRunning) {
                    return
                }
                isRunning = true
                // 依次执行任务
                while(i < tasks.length) {
                    const task = tasks[i];
                    i++
                    const r = await task();
                    results.push(r)
                    if (!isRunning) {
                        return
                    }
                }
                isRunning = false;
                resolve(results);
            })
        },
        pause: function() {
            console.log('暂停')
            isRunning = false
        }
    }
}

const t1 = () => {
    console.log("任务1开始")
    console.log("任务1结束")
}
const t2 = async () => {
    console.log("任务2开始")
    await new Promise(res => setTimeout(res, 1000))
    console.log("任务2结束")
}
const t3 = () => {
    console.log("任务3开始")
    console.log("任务3结束")
}

const { start, pause } = processTasks([t1,t2,t3])
start()
pause()
start()