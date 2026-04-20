// brute force solution O(n ^ 2)
var canCompleteCircuit = function(gas, cost) {
    let result = -1;
    if (gas.length === 1) {
        return 0;
    }
    function dfs(visited, currentIndex, tank, startIndex) {
        visited++
        if (visited === gas.length + 1) {
            result = startIndex;
            return
        }
        tank = tank + gas[currentIndex] - cost[currentIndex]
        if (tank >= 0) {
            let nextIndex = currentIndex + 1 >= gas.length ? currentIndex + 1 - gas.length : currentIndex + 1;
            dfs(visited, nextIndex, tank, startIndex)
        }
    }
    for (let i = 0; i < gas.length; i++) {
        dfs(0, i, 0, i);
    }
    return result
};
// Greedy solution
var canCompleteCircuit = function(gas, cost) {
    let result = -1;
    if (gas.length === 1) {
        return 0;
    }
    function dfs(visited, currentIndex, tank, startIndex) {
        visited++
        if (visited === gas.length + 1) {
            result = startIndex;
            return
        }
        tank = tank + gas[currentIndex] - cost[currentIndex]
        if (tank >= 0) {
            let nextIndex = currentIndex + 1 >= gas.length ? currentIndex + 1 - gas.length : currentIndex + 1;
            dfs(visited, nextIndex, tank, startIndex)
        }
    }
    for (let i = 0; i < gas.length; i++) {
        dfs(0, i, 0, i);
    }
    return result
};
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))

