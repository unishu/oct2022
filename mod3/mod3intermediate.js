// 1: Uppercase the first character

//Write a function ucFirst(str) that returns the string str with the capitalized first character
//For instance: ucFirst("john") == "John"

function questionOneIntermediate() {
    function ucFirst(str) {
        //Write code in here
    let newStr = str[0].toUpperCase() + str.slice(1);
    }  

    console.log(ucFirst("john") == "John" ? 'Everything has worked as planned' : 'Something went wrong')
}

// 2: Truncate the text

//Create a function truncate(str, maxlength) that checks the length of the string
//and if it exceeds maxlength - replaces the end of str with the ellipsis character "..."
//to make its length equal to maxlength

//The result of the function should be the truncated (only if needed) string

function questionTwoIntermediate() {
    function truncate(str, maxlength) {
        //Write code in here
        return (str.length > maxlength) ?
        str.slice(0, maxlength -1) + "..." : str;
    }

    if (truncate("What I'd like to tell you on this topic is:", 20) == "What I'd like to tel...") {
        console.log("Test 1 passed")
    } else {
        console.log("Test 1 failed")
    }

    if (truncate("Hi everyone!", 20) == "Hi everyone!") {
        console.log("Test 2 passed")
    } else {
        console.log("Test 2 failed")
    }
}

// 3: Array Operations

//Let's try 5 array operations

//a: Create an array styles with items "Jazz" and "Blues".
//b: Append "Rock-n-Roll" to the end
//c: Replace the value in the middle by "Classics". Your code for finding the middle value should work
//for any arrays with odd length
//d: Strip off the first value of the array and show it
//e: Prepend "Rap" and "Reggae" to the array

//The array in the process:
//Jazz, Blues
//Jazz, Blues, Rock-n-Roll
//Classics, Rock-n-Roll
//Rap, Reggae, Classics, Rock-n-Roll

function questionThreeIntermediate() {
    //Write code here
    let styles = ["Jazz", "Blues"];
    styles.push("Rock-n-Roll");
    styles[Math.floor(styles.length - 1)/ 2] = "Classic";
    alert(styles.shift());
    styles.unshift("Rap", "Reggae");
}
  

// 4: Translate border-left-width to borderLeftWidth

//Write the function camelize(str) that changes dash-seperated words
//like "my-short-string" into camel-cased "myShortString"

//That is: removes all dashes, each word after dash becomes uppercased

function questionFourIntermediate() {
    function camelize(str) {
        return str
          .split('-')
          .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
          )
          .join(''); 
      }

    if (camelize("background-color") == 'backgroundColor') {
        console.log("Test 1 passed")
    } else {
        console.log("Test 1 failed")
    }

    if (camelize('list-style-image') == 'listStyleImage') {
        console.log("Test 2 passed")
    } else {
        console.log("Test 2 failed")
    }

    if (camelize("-webkit-transition") == 'WebkitTransition') {
        console.log("Test 3 passed")
    } else {
        console.log("Test 3 failed")
    }
}

// 5: Create an extendable calculator

//Create a constructor function Calculator that creates "extendable" calculator objects
//The task consists of two parts.

//a: First, implement the method calculate(str) that takes a string like
//"1 + 2" in the format "NUMBER operator NUMBER" (space-delimited) and returns the result.
//Should understand plus + and minus -

/*
    Usage Example: 
    let calc = new Calculator()

    alert( calc.calculate("3 + 7") ) //10
*/

//b: Then add the method addMethod(name, func) that teaches the calculator
//a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

/*
    For instance, let's add the multiplication *, division /. and power **

    let powerCalc = new Calculator();
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    alert( result ); //8
*/

//No parentheses or complex expressions in this task.
//The numbers and the operator are delimited with exactly one space
//There may be error handling if you'd like to add it
//Create an extendable calculator

function questionFiveIntermediate() {
    //Write your Calculator constructor function here
    function Calculator() {
        this.method = {
            "+" : (a, b) => a + b,
            "-" : (a, b) => a - b
        }


    }

    let powerCalc = new Calculator()
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    if (powerCalc.calculate("3 + 7") == 10) {
        console.log("Test 1 passed")
    } else {
        console.log("Test 1 failed")
    }

    if (powerCalc.calculate("3 - 7") == -4) {
        console.log("Test 2 passed")
    } else {
        console.log("Test 2 failed")
    }

    if (powerCalc.calculate("3 * 7") == 21) {
        console.log("Test 3 passed")
    } else {
        console.log("Test 3 failed")
    }

    if (powerCalc.calculate("8 / 4") == 2) {
        console.log("Test 4 passed")
    } else {
        console.log("Test 4 failed")
    }

    if (powerCalc.calculate("3 ** 2") == 9) {
        console.log("Test 5 passed")
    } else {
        console.log("Test 5 failed")
    }
}

// 6: Filter unique array members

//Let arr be an array.

//Create a function unique(arr) that should return an array with unique items of arr

/*
    For instance:

    let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", ":-O"]
    console.log( unique(values) ) // Hare, Krishna, :-O
*/

//P.S: Here strings are used, but can be values of any type

function questionSixIntermediate() {
    function unique(arr) {
        //Write code here
        return
    }

    if (unique(['Sebastian', 'Auckland', 'Auckland', 'AKL', 'NZ', 'AKL', 'NZ']).length == 4) {
        console.log('Test 1 passed')
    } else {
        console.log("Test 1 failed")
    }
}

// 7: Iterable keys

//We'd like to get an array of map.keys() in a variable and then apply
//array-specific methods to it, eg .push
//But that doesn't work as you will see by calling the questionSevenIntermediate function

//Why? How can we fix the code to make keys.push work?

function questionSevenIntermediate() {
    //Change the code within the try block so no error occurs
    try {
        let map = new Map();

        map.set("name", "John");

        let keys = Array.from(map.keys());

        keys.push("more") //Error: keys.push is not a function
        
        alert(keys);

        console.log(keys)
    } catch (e) {
        console.error('An error occured')
        console.error(e)
    }
}

// 8: Store "unread flags"
//There's an array of messages:

/*

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
]

*/

//Your code can access it, but the messages are managed by someone else's code.
//New messages are added, old ones are removed regularly by that code,
//and you don't know the exact moments when it happens.

//Now, which data structure could you use to store information about whether
//the message "has been read"? The structure must be well-suited to give the
//answer "was it read?" for the given message object.

//P.S when a message is removed from messages, it should disappear from your
//structure as well.

//P.P.S We shouldn't modify message objects, add our properties to them.
//As they are managed by someone else's code, that may lead to
//bad consequences.

function questionEightIntermediate() {
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ]

    //Write your code here
    
}

// 9: Sum the properties

//There is a salaries object with arbitrary number of salaries.

//Write the function sumSalaries(salaries) that returns the sum of all salaries
//using Object.values and the for..of loop.

//If salaries is empty, then the result must be 0.

function questionNineIntermediate() {
    function sumSalaries(salaries) {
        //Write your code here
    }

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    }

    if (sumSalaries(salaries) == 650) {
        console.log("Test 1 passed")
    } else {
        console.log("Test 1 failed")
    }

    if (sumSalaries({}) == 0) {
        console.log("Test 2 passed")
    } else {
        console.log("Test 2 failed")
    }
}

// 10: The maximal salary

/*
There is a salaries object:
const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
*/

//Create the function topSalry(salaries) that returns the name of the top-paid person

//If salaries is empty, it should return null
//If there are multiple top-paid persons, return any of them.

//P.S Use Object.entries and destructuring to iterate over key/value pairs

function questionTenIntermediate() {
    function topSalary(salaries) {
        //Write your code here
        
    }

    const salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };

    const salariesTwo = {
        "John": 300,
        "Pete": 300,
        "Bradley": 300,
        "Benjamin": 250,
        "Alex": 100,
        "Azaria": 100
    }

    const salariesTwoHighestSalaries = ["John", "Pete", "Bradley"]

    if (topSalary(salaries) === 'Pete') {
        console.log("Test 1 passed")
    } else {
        console.log("Test 1 failed")
    }

    if (topSalary({}) == null) {
        console.log("Test 2 passed")
    } else {
        console.log("Test 2 failed")
    }

    if ( salariesTwoHighestSalaries.includes( topSalary(salariesTwo) ) ) {
        console.log("Test 3 passed")
    } else {
        console.log("Test 3 failed")
    }
}

// 11: How many seconds have passed today?

//Write a function getSecondsToday() that returns the number of seconds from
//the beggining of today.

//For instance, if now were 10:00AM, and there was no daylght savings shift,
//then:
//getSecondsToday() == 36000 // (3600 * 10)

//The function should work in any day. That is, it should not have a
//hard-coded value of "today".

function questionElevenIntermediate() {
    function getSecondsToday() {
        //Write your code here
    }

    console.log(getSecondsToday())
}

// 12: Exclude backreferences

//In simple cases of circular references, we can exclude an offending
//property from serialization vy its name.

//But sometimes we can't just use the name, as it may be used both in circular
//references and normal properties. So we can check the property by its value.

//Write replacer function to stringify everything, but remove properties
//that reference meetup:

function questionTwelveIntermediate() {
    let room = {
        number: 23
    }

    let meetup = {
        title: "Conference",
        occupiedBy: [{name: "John"}, {name: "Alice"}],
        place: room
    }

    //circular references
    room.occupiedBy = meetup;
    meetup.self = meetup;

    console.log(JSON.stringify(meetup, function replacer(key, value) {
        //Write your replacer code here
    }))

    /*
        Result should be:
        {
            "title": "Conference",
            "occupiedBy": [{"name": "John"}, {"name": "Alice"}],
            "place": {"number": 23}
        }
    */
}