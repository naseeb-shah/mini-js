arr=[5 ,10, 4, 9, 2, 2]
var n =arr.length
console.log(majority(arr,n))
function majority(arr,n){

    var count=0;
    var candi=-1
     for(var index=0; index<n; index++){

        if(count==0){
            candi=arr[index]
            count=1
        }
        else{
            if(arr[index]==candi){
                count++
            }else{
                count--
            }
        }
     }
     count=0
     for(var i =0;i<arr.length;i++){
         if(arr[i]==candi){
             count++
         }
         if(count>n/2){
             return candi
         }
     }
     return -1
}