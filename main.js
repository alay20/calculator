// var operator = prompt("add, subtract, multiply, or divide?").toLowerCase();
// var num1 = parseInt(prompt("First number?"));
// var num2 = parseInt(prompt("Second number?"));
// var result 
// operate(num1, num2);
// var sum = null
// var difference = null
// var product = null
// var quotient = null


var operator;
var num1;
var num2;
var result;

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

// Calculator Display
var clickCount = 0
var displayNum = "";
var calcNum1 = 0;
var calcNum2 = 0;
var calcDisplay = document.querySelector('.calc-display');

function displayNumber0() {
    displayNum += "0";
    calcDisplay.textContent = displayNum;
    clickCount += 1;
    if (clickCount === 1) {
        keyZero.disabled = true;
        keyOne.disabled = true;
        keyTwo.disabled = true;
        keyThree.disabled = true;
        keyFour.disabled = true;
        keyFive.disabled = true;
        keySix.disabled = true;
        keySeven.disabled = true;
        keyEight.disabled = true;
        keyNine.disabled = true;
    } else if (clickCount > 1 && clickCount < 12) {
        keyZero.disabled = false;
        keyOne.disabled = false;
        keyTwo.disabled = false;
        keyThree.disabled = false;
        keyFour.disabled = false;
        keyFive.disabled = false;
        keySix.disabled = false;
        keySeven.disabled = false;
        keyEight.disabled = false;
        keyNine.disabled = false;
    } else if (clickCount > 12) {
        keyZero.disabled = true;
        keyOne.disabled = true;
        keyTwo.disabled = true;
        keyThree.disabled = true;
        keyFour.disabled = true;
        keyFive.disabled = true;
        keySix.disabled = true;
        keySeven.disabled = true;
        keyEight.disabled = true;
        keyNine.disabled = true;
        keyDecimal.disabled = true;
    }
}

function displayNumber1() {
    displayNum += "1";
    calcDisplay.textContent = displayNum;
    clickCount += 1;
    if (clickCount > 12) {
        keyZero.disabled = true;
        keyOne.disabled = true;
        keyTwo.disabled = true;
        keyThree.disabled = true;
        keyFour.disabled = true;
        keyFive.disabled = true;
        keySix.disabled = true;
        keySeven.disabled = true;
        keyEight.disabled = true;
        keyNine.disabled = true;
        keyDecimal.disabled = true;
    }
}

function displayNumber2() {
    displayNum += "2";
    calcDisplay.textContent = displayNum;
    clickCount += 1;
    if (clickCount > 12) {
        keyZero.disabled = true;
        keyOne.disabled = true;
        keyTwo.disabled = true;
        keyThree.disabled = true;
        keyFour.disabled = true;
        keyFive.disabled = true;
        keySix.disabled = true;
        keySeven.disabled = true;
        keyEight.disabled = true;
        keyNine.disabled = true;
        keyDecimal.disabled = true;
    }
}

function displayNumber3() {
    displayNum += "3";
    calcDisplay.textContent = displayNum;
    clickCount += 1;
    if (clickCount > 12) {
        keyZero.disabled = true;
        keyOne.disabled = true;
        keyTwo.disabled = true;
        keyThree.disabled = true;
        keyFour.disabled = true;
        keyFive.disabled = true;
        keySix.disabled = true;
        keySeven.disabled = true;
        keyEight.disabled = true;
        keyNine.disabled = true;
        keyDecimal.disabled = true;
    }
}

function displayNumber4() {
    displayNum += "4";
    calcDisplay.textContent = displayNum;
    clickCount += 1;
    if (clickCount > 12) {
        keyZero.disabled = true;
        keyOne.disabled = true;
        keyTwo.disabled = true;
        keyThree.disabled = true;
        keyFour.disabled = true;
        keyFive.disabled = true;
        keySix.disabled = true;
        keySeven.disabled = true;
        keyEight.disabled = true;
        keyNine.disabled = true;
        keyDecimal.disabled = true;
    }
}

function displayNumber5() {
    displayNum += "5";
    calcDisplay.textContent = displayNum;
    clickCount += 1;
    if (clickCount > 12) {
        keyZero.disabled = true;
        keyOne.disabled = true;
        keyTwo.disabled = true;
        keyThree.disabled = true;
        keyFour.disabled = true;
        keyFive.disabled = true;
        keySix.disabled = true;
        keySeven.disabled = true;
        keyEight.disabled = true;
        keyNine.disabled = true;
        keyDecimal.disabled = true;
    }
}

function displayNumber6() {
    displayNum += "6";
    calcDisplay.textContent = displayNum;
    clickCount += 1;
    if (clickCount > 12) {
        keyZero.disabled = true;
        keyOne.disabled = true;
        keyTwo.disabled = true;
        keyThree.disabled = true;
        keyFour.disabled = true;
        keyFive.disabled = true;
        keySix.disabled = true;
        keySeven.disabled = true;
        keyEight.disabled = true;
        keyNine.disabled = true;
        keyDecimal.disabled = true;
    }
}

function displayNumber7() {
    displayNum += "7";
    calcDisplay.textContent = displayNum;
    clickCount += 1;
    if (clickCount > 12) {
        keyZero.disabled = true;
        keyOne.disabled = true;
        keyTwo.disabled = true;
        keyThree.disabled = true;
        keyFour.disabled = true;
        keyFive.disabled = true;
        keySix.disabled = true;
        keySeven.disabled = true;
        keyEight.disabled = true;
        keyNine.disabled = true;
        keyDecimal.disabled = true;
    }
}

function displayNumber8() {
    displayNum += "8";
    calcDisplay.textContent = displayNum;
    clickCount += 1;
    if (clickCount > 12) {
        keyZero.disabled = true;
        keyOne.disabled = true;
        keyTwo.disabled = true;
        keyThree.disabled = true;
        keyFour.disabled = true;
        keyFive.disabled = true;
        keySix.disabled = true;
        keySeven.disabled = true;
        keyEight.disabled = true;
        keyNine.disabled = true;
        keyDecimal.disabled = true;
    }
}

function displayNumber9() {
    displayNum += "9";
    calcDisplay.textContent = displayNum;
    clickCount += 1;
    if (clickCount > 12) {
        keyZero.disabled = true;
        keyOne.disabled = true;
        keyTwo.disabled = true;
        keyThree.disabled = true;
        keyFour.disabled = true;
        keyFive.disabled = true;
        keySix.disabled = true;
        keySeven.disabled = true;
        keyEight.disabled = true;
        keyNine.disabled = true;
        keyDecimal.disabled = true;
    }
}

function displayDecimal() {
    displayNum += "."
    calcDisplay.textContent = displayNum;
    keyDecimal.disabled = true;
    clickCount += 1;
    if (clickCount === 1) {
        calcDisplay.textContent = "0."
        keyZero.disabled = true;
        keyOne.disabled = true;
        keyTwo.disabled = true;
        keyThree.disabled = true;
        keyFour.disabled = true;
        keyFive.disabled = true;
        keySix.disabled = true;
        keySeven.disabled = true;
        keyEight.disabled = true;
        keyNine.disabled = true;
    } else if (clickCount > 1 && clickCount < 12) {
        keyZero.disabled = false;
        keyOne.disabled = false;
        keyTwo.disabled = false;
        keyThree.disabled = false;
        keyFour.disabled = false;
        keyFive.disabled = false;
        keySix.disabled = false;
        keySeven.disabled = false;
        keyEight.disabled = false;
        keyNine.disabled = false;
    } else if (clickCount > 12) {
        keyZero.disabled = true;
        keyOne.disabled = true;
        keyTwo.disabled = true;
        keyThree.disabled = true;
        keyFour.disabled = true;
        keyFive.disabled = true;
        keySix.disabled = true;
        keySeven.disabled = true;
        keyEight.disabled = true;
        keyNine.disabled = true;
    }
}

function pressAdd (){
    operator = "add";
    num1 = parseInt(displayNum);
    displayNum = "";
    calcDisplay.textContent = displayNum;
}

function operate () {
    num2 = parseInt(displayNum);
    if (operator === "add") {
        result = addition(num1, num2);
    } else if (operator === "subtract") {
        result = subtraction(a, b);
    } else if (operator === "multiply") {
        result = multiplication(a, b);
    } else if (operator === "division") {
        result = division(a, b);
    }
    calcDisplay.textContent = result;
    console.log(result);
}


var keyZero = document.querySelector('.key-0');
var keyOne = document.querySelector('.key-1');
var keyTwo = document.querySelector('.key-2');
var keyThree = document.querySelector('.key-3');
var keyFour = document.querySelector('.key-4');
var keyFive = document.querySelector('.key-5');
var keySix = document.querySelector('.key-6');
var keySeven = document.querySelector('.key-7');
var keyEight = document.querySelector('.key-8');
var keyNine = document.querySelector('.key-9');
var keyDecimal = document.querySelector('.key-decimal');
var keyAdd = document.querySelector('.key-add');
var keyEqual = document.querySelector('.key-equal');

keyZero.addEventListener('click', displayNumber0);
keyOne.addEventListener('click', displayNumber1);
keyTwo.addEventListener('click', displayNumber2);
keyThree.addEventListener('click', displayNumber3);
keyFour.addEventListener('click', displayNumber4);
keyFive.addEventListener('click', displayNumber5);
keySix.addEventListener('click', displayNumber6);
keySeven.addEventListener('click', displayNumber7);
keyEight.addEventListener('click', displayNumber8);
keyNine.addEventListener('click', displayNumber9);
keyDecimal.addEventListener('click', displayDecimal);
keyAdd.addEventListener('click', pressAdd);
keyEqual.addEventListener('click', operate);

