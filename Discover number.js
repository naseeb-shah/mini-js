function bin(arr,n,x){
    console.log(arr,n,x)
    var l=0
    var r=n
    while(l<=r){
        var mid=Math.floor(l+((r-l)/2))
        var sum=arr[mid]
        if(sum==x){
            return "Yes"
        }
        if(sum>x){
            r=mid-1
        }else{
            l=mid+1
        }
    }
    return "No"
}
var arr=[10,20,30,40,50]
console.log(bin(arr,arr.length,))