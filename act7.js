//Activity 7 Part 1 //

 function greeting(a,b) {
    return a + " " + b;
}

console.log(greeting("Hello", "Matt"));


/* function greeting(Hello,b) {
    return 'Hello' + " " + b;
}

console.log(greeting("Hello", "Matt")); */


//Part 2//

/* function greeting(hello, name1){
    return "Hello" +" "+name1;
}
var prompt=greeting("hello", "Matt");
console.log(prompt) */


var prompt = require('prompt-sync')()
var username = prompt('enter your name'); 

function hello(name) {
    return name;
}
console.log(hello("Matt"));


/*
function hello(name){
    return "Hello" + " " + name;
}
console.log(hello("Matt"));
*/


