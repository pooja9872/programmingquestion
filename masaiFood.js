var input = `6
1
2 5
2 7
2 9
1
1`;
var newInput = input.split("\n");
var testcase = Number(newInput[0]);
//console.log(testcase);
//console.log(newInput);

var stack = [];
for (let i = 1; i <= testcase; i++) {
    let element = newInput[i].split(" ").map(Number);
    //console.log(element);

    if (element[0] == 1) {
        if (stack.length == 0) {
            console.log("No Food");
        } else {
            console.log(stack[stack.length - 1])
            stack.pop(element[0]);
            //console.log(stack.pop(element[0]));
        }
    }
    else {
        stack.push(element[1]);
    }
}






