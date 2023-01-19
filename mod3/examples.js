function questionOneIntermediate() {
    function ucFirst(str) { //defined function
        //Write code in here
        return str[0].toUpperCase() + str.slice(1); 
        //character at index 0 and before 1, replace with character uppercase when called and return to console.log(str) as result
    }  

    const str2 = ucFirst("str");// function call

    console.log(str2); //printing str2
    console.log(ucFirst("john") == "John" ? 'Everything has worked as planned' : 'Something went wrong')
    // John, Everything has worked as planned
}