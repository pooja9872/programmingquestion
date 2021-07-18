var input = `aaaabjagd`;
var str = input;
//console.log(str);

var stack = [];
for (var i = 0; i < str.length; i++) {
    stack.push(str[i]);
    if (str[i] == str[i + 1]) {
        stack.pop();
        i++;
    }

}
if (stack == '') {
    console.log("Empty String")
} else {
    console.log(stack.join(""));
}
