var input = `4
1
9444
6
1549 9638 7397 8313 3150 7284
3
9213 9172 1892
5
3988 4871 1119 5654 9739`;
var newInput = input.split("\n")
//console.log(newInput.length);

for (var i = 2; i < newInput.length; i = i + 2) {
    var arr = newInput[i].trim().split(" ").map(Number);
    //console.log(arr.length);
    console.log(nextGreater(arr));

}
function nextGreater(arr) {
    var stack = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (stack.length == 0) {
            stack.push(arr[i]);
        }
        while (stack.length == 0 && stack.top() < arr[i]) {
            stack.pop();
        }
        stack.push(arr[i]);
    }
    while (stack.length == 0) {
        console.log(stack.top(-1))
        stack.pop();
    }
    return stack
}


