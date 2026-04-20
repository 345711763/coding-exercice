// 插入排序算法： 从当前位置往前一个一个对比，如果前一个值大于当前的值则交换位置
// [3,7,2,9,4,8,1,5,6] => [1,2,3,4,5,6,7,8,9]
// 2 3 7 9
function insertSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    for(let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > currentValue) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = currentValue
    }
    return arr;
}

console.log(insertSort([3,7,2,9,4,8,1,5,6]))