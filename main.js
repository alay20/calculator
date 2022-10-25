var operator;
var num1
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

// Calculator Display
var numKeyCount = 0;
var operatorKeyCount = 0;
var equalKeyCount = 0;
var displayNum = "";
var calcDisplay = document.querySelector('.calc-display');
calcDisplay.textContent = "0";

function clearDisplay () {
    displayNum = "";
    numKeyCount = 0;
    operatorKeyCount = 0;
    equalKeyCount = 0;
    operator = "";
    num1 = 0;
    num2 = 0;
    result = 0;
    calcDisplay.textContent = "0";
}

function displayNumber0() {
    numKeyCount += 1;
    
    keyAdd.disabled = false;
    keySubtract.disabled = false;
    keyDivide.disabled = false;
    keyMultiply.disabled = false;
    keyEqual.disabled = false;
    
    if (numKeyCount === 1) {
        displayNum = "0."
        calcDisplay.textContent = displayNum;
        keyDecimal.disabled = true;
    } else if (numKeyCount > 1 && numKeyCount < 11) {
        displayNum += "0";
        calcDisplay.textContent = displayNum;    
        keyDecimal.disabled = true;
    } else if (numKeyCount > 11) {
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
    numKeyCount += 1; 
    
    keyAdd.disabled = false;
    keySubtract.disabled = false;
    keyDivide.disabled = false;
    keyMultiply.disabled = false;
    keyEqual.disabled = false;
    
    if (numKeyCount === 1) {
        displayNum = "";
        displayNum += "1";
        calcDisplay.textContent = displayNum;  
    } else {
        displayNum += "1";
        calcDisplay.textContent = displayNum;        
    }
    
    if (numKeyCount > 11) {
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
    numKeyCount += 1; 
   
    keyAdd.disabled = false;
    keySubtract.disabled = false;
    keyDivide.disabled = false;
    keyMultiply.disabled = false;
    keyEqual.disabled = false;
    
    if (numKeyCount === 1) {
        displayNum = "";
        displayNum += "2";
        calcDisplay.textContent = displayNum;  
    } else {
        displayNum += "2";
        calcDisplay.textContent = displayNum;        
    }
    
    if (numKeyCount > 11) {
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
    numKeyCount += 1; 
    
    keyAdd.disabled = false;
    keySubtract.disabled = false;
    keyDivide.disabled = false;
    keyMultiply.disabled = false;
    keyEqual.disabled = false;
    
    if (numKeyCount === 1) {
        displayNum = "";
        displayNum += "3";
        calcDisplay.textContent = displayNum;  
    } else {
        displayNum += "3";
        calcDisplay.textContent = displayNum;        
    }
    
    if (numKeyCount > 11) {
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
    numKeyCount += 1; 
    
    keyAdd.disabled = false;
    keySubtract.disabled = false;
    keyDivide.disabled = false;
    keyMultiply.disabled = false;
    keyEqual.disabled = false;

    if (numKeyCount === 1) {
        displayNum = "";
        displayNum += "4";
        calcDisplay.textContent = displayNum;  
    } else {
        displayNum += "4";
        calcDisplay.textContent = displayNum;        
    }
    
    if (numKeyCount > 11) {
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
    numKeyCount += 1; 
    
    keyAdd.disabled = false;
    keySubtract.disabled = false;
    keyDivide.disabled = false;
    keyMultiply.disabled = false;
    keyEqual.disabled = false;

    if (numKeyCount === 1) {
        displayNum = "";
        displayNum += "5";
        calcDisplay.textContent = displayNum;  
    } else {
        displayNum += "5";
        calcDisplay.textContent = displayNum;        
    }
    
    if (numKeyCount > 11) {
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
    numKeyCount += 1; 
    
    keyAdd.disabled = false;
    keySubtract.disabled = false;
    keyDivide.disabled = false;
    keyMultiply.disabled = false;
    keyEqual.disabled = false;

    if (numKeyCount === 1) {
        displayNum = "";
        displayNum += "6";
        calcDisplay.textContent = displayNum;  
    } else {
        displayNum += "6";
        calcDisplay.textContent = displayNum;        
    }
    
    if (numKeyCount > 11) {
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
    numKeyCount += 1; 
    
    keyAdd.disabled = false;
    keySubtract.disabled = false;
    keyDivide.disabled = false;
    keyMultiply.disabled = false;
    keyEqual.disabled = false;

    if (numKeyCount === 1) {
        displayNum = "";
        displayNum += "7";
        calcDisplay.textContent = displayNum;  
    } else {
        displayNum += "7";
        calcDisplay.textContent = displayNum;        
    }
    
    if (numKeyCount > 11) {
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
    numKeyCount += 1; 
    
    keyAdd.disabled = false;
    keySubtract.disabled = false;
    keyDivide.disabled = false;
    keyMultiply.disabled = false;
    keyEqual.disabled = false;

    if (numKeyCount === 1) {
        displayNum = "";
        displayNum += "8";
        calcDisplay.textContent = displayNum;  
    } else {
        displayNum += "8";
        calcDisplay.textContent = displayNum;        
    }
    
    if (numKeyCount > 11) {
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
    numKeyCount += 1; 
    
    keyAdd.disabled = false;
    keySubtract.disabled = false;
    keyDivide.disabled = false;
    keyMultiply.disabled = false;
    keyEqual.disabled = false;

    if (numKeyCount === 1) {
        displayNum = "";
        displayNum += "9";
        calcDisplay.textContent = displayNum;  
    } else {
        displayNum += "9";
        calcDisplay.textContent = displayNum;        
    }
    
    if (numKeyCount > 11) {
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
    numKeyCount += 1;
    
    keyDecimal.disabled = true;
    keyEqual.disabled = false;
    
    if (numKeyCount <= 1) {
        displayNum = "0."
        calcDisplay.textContent = displayNum;
    } else if (numKeyCount > 1 && numKeyCount < 11) {
        displayNum += "."
        calcDisplay.textContent = displayNum;
    } 
}

function pressAdd (){
    
    numKeyCount = 0;
    operatorKeyCount += 1;
    keyDecimal.disabled = false;
    keyAdd.disabled = true;
    
    if (operatorKeyCount === 1) {
        operator = "add";
        num1 = parseFloat(displayNum);
    } else {
        operateWithOperator();
        operator = "add";
    }
}

function pressSubtract (){
    
    numKeyCount = 0;
    operatorKeyCount += 1;
    keyDecimal.disabled = false;
    keySubtract.disabled = true;

    if (operatorKeyCount === 1) {
        operator = "subtract";
        num1 = parseFloat(displayNum);
    } else {
        operateWithOperator();
        operator = "subtract";
    }
}

function pressMultiply (){
    numKeyCount = 0;
    operatorKeyCount += 1;
    keyDecimal.disabled = false;
    keyMultiply.disabled = true;
    
    if (operatorKeyCount === 1 || equalKeyCount >= 1) {
        operator = "multiply";
        num1 = parseFloat(displayNum);
    } else {
        operateWithOperator();
        operator = "multiply";
    }
}

function pressDivide (){
    
    numKeyCount = 0;
    operatorKeyCount += 1;
    keyDecimal.disabled = false;
    keyDivide.disabled = true;
    
    if (operatorKeyCount === 1) {
        operator = "divide";
        num1 = parseFloat(displayNum);
    } else {
        operateWithOperator();
        operator = "divide";
    }
}

function operate () {
    equalKeyCount += 1;
    num2 = parseFloat(displayNum);
    
        if (operator === "add") {
            result = addition(num1, num2);
            console.log("expression: " + num1 +" + "+ num2 + " = " + result)
        } else if (operator === "subtract") {
            result = subtraction(num1, num2);
            console.log("expression: " + num1 +" - "+ num2 + " = " + result)
        } else if (operator === "multiply") {
            result = multiplication(num1, num2);
            console.log("expression: " + num1 +" x "+ num2 + " = " + result)
        } else if (operator === "divide") {
            result = division(num1, num2);
            console.log("expression: " + num1 +" / "+ num2 + " = " + result)
        }
    
    calcDisplay.textContent = result;
    displayNum = result;
    num1 = result;
    operatorKeyCount = 0;
    numKeyCount = 0;
    keyEqual.disabled = true;
}


function operateWithOperator () {
    // if (equalKeyCount === 1) {
    num2 = parseFloat(displayNum);
        if (operator === "add") {
            result = addition(num1, num2);
            console.log("expression: " + num1 +"+"+ num2 + "=" + result)
        } else if (operator === "subtract") {
            result = subtraction(num1, num2);
            console.log("expression: " + num1 +"-"+ num2 + "=" + result)
        } else if (operator === "multiply") {
            result = multiplication(num1, num2);
            console.log("expression: " + num1 +"x"+ num2 + "=" + result)
        } else if (operator === "divide") {
            result = division(num1, num2);
            console.log("expression: " + num1 +"/"+ num2 + "=" + result)
        }
    
    calcDisplay.textContent = result;
    displayNum = result;
    num1 = result;
    // operatorKeyCount = 0;
    numKeyCount = 0;
    keyEqual.disabled = true;
}

var keyClear = document.querySelector('.key-clear');
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
var keySubtract = document.querySelector('.key-subtract');
var keyMultiply = document.querySelector('.key-multiply');
var keyDivide = document.querySelector('.key-divide');
var keyEqual = document.querySelector('.key-equal');

keyClear.addEventListener('click', clearDisplay);
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
keySubtract.addEventListener('click', pressSubtract);
keyMultiply.addEventListener('click', pressMultiply);
keyDivide.addEventListener('click', pressDivide)
keyEqual.addEventListener('click', operate);