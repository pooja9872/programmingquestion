var input = `5 6
12 18 17 65 46`;
var newinput = input.split("\n");
var data = newinput[0].split(" ").map(Number);
var n = data[0];
var k = data[1];
var arr = newinput[1].split(" ").map(Number)
//console.log(arr, n, k);

for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
        if (arr[j] % k > arr[j + 1] % k) {
            var temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
        //console.log(arr);
    }
}
console.log(arr.join(' '));