var input = `4
8 5 6 3`;
var newinput = input.split("\n");
var arr = newinput[1].split(" ").map(Number)
var n = arr.length
//console.log(arr);

for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
        //console.log(arr);
    }
}
console.log(arr.join(' '));