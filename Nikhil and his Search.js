var arr = [1, 2, 3, 4, 5, 7, 8, 9, 10]
var n = arr.length
console.log(lowe(arr, n, 5))
console.log(Up(arr,n,5))
function lowe(arr, n, X) {

    var low = 0
    var high = n

    while (low < high) {
        mid = low + Math.floor((high - low) / 2)
        mid
        if (arr[mid] >= X) {
            high = mid - 1
        }

        else {
            low = mid + 1;
        }
    }

    if (low < n) {
        return low + 1
    }
    else
        return -1
}
function Up(arr, n, X) {

    var low = 0
    var high = n

    while (low < high) {
        mid = low + Math.floor((high - low) / 2)
mid
low
        if (arr[mid] > X) {
            high = mid;
        }

        else {
            low = mid + 1;
        }
    }

    if (low < n) {
        return low
    }
    else
        return -1
}
