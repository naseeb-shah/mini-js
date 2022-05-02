function runProgram(main) {
    main = main.split("\n");
    var firsline = main[0].split(" ").map(Number);
    var n = firsline[0]
    k = firsline[1];
    var arr = main[1].split(" ").map(Number);

    sai(n, k, arr);

}
function sai(n, k, arr) {
    var c = 0;
    var i = n - 3;
    var j = n - 1;
    while ((i + 1) < j) {


        var subsum = Math.abs(arr[j] - arr[i]);
        
        
        
        if (subsum <= k) {
        
            var sum = ((j - i - 1) * (j - i)) / 2;
            
            c += sum;
        
            i--;

        } else {
         
            j--;
        }
    }
    return c;
}
if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (main) {
        read += main;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}