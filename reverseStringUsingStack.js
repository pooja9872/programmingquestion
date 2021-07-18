var input = `pooja`;
var str = input;
//console.log(str.length)
var stack = [];

for (var i = 0; i < str.length; i++) {

    stack.push(str[i]);

}
//console.log(stack);

var str1 = "";
for (i = 0; i < str.length; i++) {
    let ch = stack.pop();
    str1 += ch;

}
console.log(str1);


////////////////////////////////////////////
// var input = `I Love To code`;
// var str = input.split(" ");
// //console.log(str.length)
// var stack = [];

// for (var i = 0; i < str.length; i++) {

//     stack.push(str[i]);

// }
// //console.log(stack);

// var str1 = "";
// for (i = 0; i < str.length; i++) {
//     let ch = stack.pop();
//     str1 += ch + " ";

// }
// console.log(str1);



