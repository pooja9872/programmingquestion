var input = `4
7 5 4 2`;
var newInput = input.split("\n");
var arr = newInput[1].split(" ").map(Number);
//console.log(arr);
var n = arr.length
for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) {
        var minimum = i;
        if (arr[j] < arr[minimum]) {
            minimum = j;
        }
        var temp = arr[minimum];
        arr[minimum] = arr[i]
        arr[i] = temp

    }
}
console.log(arr.join(' '));
