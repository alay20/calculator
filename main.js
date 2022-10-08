var operator = prompt("add, subtract, multiply, or divide?").toLowerCase();
var num1 = parseInt(prompt("First number?"));
var num2 = parseInt(prompt("Second number?"));
var result 
operate(num1, num2);
// var sum = null
// var difference = null
// var product = null
// var quotient = null


function addition (a, b) {
    return a + b;
}

function subtraction (a, b){
    return a - b;
}

function multiplication (a,b){
    return a*b;
}

function division (a,b){
    return a/b;
}

function operate (a, b) {
    if (operator === "add") {
        result = addition(a , b);
    } else if (operator === "subtract") {
        result = subtraction(a, b);
    } else if (operator === "multiply") {
        result = multiplication(a, b);
    } else if (operator === "division") {
        result = division(a, b);
    }
console.log(result);
}



