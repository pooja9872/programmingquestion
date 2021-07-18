var input = `6
1 15
1 20
2
3
2
3`;
var newInput = input.split("\n");
var testcase = Number(newInput[0]);
//console.log(testcase);
//console.log(newinput);

var stack = [];
for (let i = 1; i <= testcase; i++) {
    let element = newInput[i].split(" ").map(Number);
    // 1 is push
    // 2 is pop
    // 3 is peek
    //console.log(element);

    if (element[0] == 1) {
        stack.push(element[1]);
    }
    else if (element[0] == 2) {
        // checking if stack is empty or not
        // underflow condition
        if (stack.length != 0) {
            stack.pop();
        }
    }
    else {
        // check if stack is empty or not
        // no element at top
        if (stack.length == 0) {
            console.log("Empty!")
        } else {
            console.log(stack[stack.length - 1]);
        }
    }
}






