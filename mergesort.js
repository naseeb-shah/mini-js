a=[2,3,4,5,2,3,4,1,2,34,]
b=[1,3,4,7]
console.log(merged(a,b))
function merged(a,b){
    n1=a.length
    n2=b.length
    l=0;
    r=0;
    res=[]
    k=0
    while(l<n1&&r<n2){
        if(a[l]>b[r]){
            res[k]=b[r]
            r++
            k++
        }else{
            res[k]=a[l]
            k++
            l++
        }
       
    }
    while(l<n1){
        res[k]=a[l]
    }
    while(r<n2){
        res[k]=b[r]
        r++
        k++
    }
    console.log(res)

}