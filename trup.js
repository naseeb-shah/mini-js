
arr=[-1, -1, -2, 3]
n=arr.length
console.log(find(arr,n))
console.log(ind(arr,n))

function ind(arr,n){
    count=0
    sum=0
    for (var i =0; i<3;i++){
        sum+=arr[i]
    }
 if(sum==0){
     count++
 }
 sum
    for(var i =3;i<n;i++){
     
        sum-=arr[i-3]
        sum
        sum+=arr[i]
        sum
     
     sum 
       if(sum==0){
            count++
        }
    }
    
    return count
}
function find(arr,n){
    count=0
    for( var i =0; i<n-2; i ++){
        for(var j =i+1; j<n-1;j++){
            for(var k=j+1;k<n;k++){
                var sum=arr[i]+arr[j]+arr[k]
                sum
                if(sum==0){
sum
                    count++
                }
            }
        }
    }
    return count
}


