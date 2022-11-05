//Activity 1//  prints out new array only

let fruits = ['Banana', 'Apple', 'Lemon', 'Kiwi', 'Grape'];
fruits.splice(1,1,'mango');
fruits.splice(4,4,'fig');

console.log(fruits);



/* prints out original array + new array
const fruit = ["orange", "mango","apple","grape", "lemon", "kiwi"];
console.log(fruit);
fruit.splice (1,1,"guava");
fruit.splice(4,1,"peach");

console.log(fruit);
console.log(Array.isArray(fruit)); */


//Activity 2//

const book = {
    "title" : "Fantastic Mr Fox",
    "description" : "The much-loved Roald Dahl children's novel",
    "author" : "Roald Dahl",
    "pages" : 96
    }
    console.log(book.title);
    console.log(book.description);
    console.log(book.author);
    console.log(book.pages)

    //Activity 3//

    /*
    Specification example:
    -this function returns the sun of 2 numbers function sum(a,b){}

    Create test:
    if (sum (4,2))!=6{error}
    
    Code:
       function sum(a,b){
        return a+b
       }
    */

    function sum(a,b) {
        return a + b;
        }
    console.log(sum(4,2));