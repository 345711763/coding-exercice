function quickSort(arr) {
    _quickSort(arr, 0, arr.length - 1);
}

function _quickSort(arr, left, right) {
    if (left >= right) return;
    const index = partition(arr, left, right);
    _quickSort(arr, left, index - 1);
    _quickSort(arr, index + 1, right);
}
function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left;
    let j = left;
    while(i < right) {
        if (arr[i] < pivot) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++
        }
        i++
    }
    const temp = arr[j];
    arr[j] = arr[right];
    arr[right] = temp;
    return j;
}


const arr = [9, 5, 8 ,5 ,2, 2, 10, 15, 7]
quickSort(arr)
console.log(arr)