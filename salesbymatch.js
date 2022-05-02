ar = [1 ,1 ,3 ,1 ,2 ,1 ,3, 3 ,3 ,3]
console.log(sale(ar))

function sale(arr) {
    sub = 0
    count = 0
    arr.sort((a, b) => a - b)
    candi = arr[0]
    arr
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == candi) {
            sub++
           
        } else {
            sub
            count+=Math.floor(sub/2)
            candi = arr[i]
            sub = 0
        }




    }
    if(sub>2){
        count+=Math.floor(sub/2)
    }
return count
}