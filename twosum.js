/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */nums = [1, 3,5,7,10]
target = 17
console.log(twoSum(nums, target))
function twoSu(nums, target) {
    lg = []
    nums.forEach(element => {
        lg.push(element)
    });
    nums.sort((a, b) => a - b)
    var l = 0;
    var r = nums.length - 1
    var result = []
    while (l < r) {
        l
        r
        console.log(nums[r])
        var sum = nums[l] + nums[r]
        sum
        if (sum == target) {

            var l = lg.indexOf(nums[l])
            lg[l] = "sai"
            var r = lg.indexOf(nums[r])
            result.push(l, r)
            break;
        }

        if (sum > target)
            r--
        else
            l++

    }
    return result

};


function twoSum(nums, target) {
    let sai = {};
    for (let i = 0; i < nums.length; i++) {
       dif=target-nums[i]
       if(sai[dif]==undefined){
           console.log(sai)
       }
       sai[i]=i
    }
}
