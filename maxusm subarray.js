a = [20, 10, -4, 15, 17, -33,-66, 177,34,88]
console.log(maxsum(a))
function maxsum(arr) {

    subsum = 0
    mainsum = 0
    var satartindex, endindex
    var flag =false
    for (var i = 0; i < arr.length; i++) {
        subsum = subsum + arr[i]
        subsum
        if (subsum > mainsum) {
if(!flag){
    satartindex=i
    flag=true
}
            mainsum = subsum
            endindex=i
        }
        if (subsum < 0) {
flag=false
            subsum = 0
        }
    }
    console.log(satartindex,endindex)
    return mainsum
}