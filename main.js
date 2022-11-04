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

var keyClear = document.querySelector('.key-clear');
var keyBackspace = document.querySelector('.key-backspace');
var keyPlusMinus = document.querySelector('.key-plus-minus');

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
keyBackspace.addEventListener('click', backSpace);
keyPlusMinus.addEventListener('click', plusMinus);

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

function backSpace () {
    var displayNumBS = displayNum.length - 1;
    

    if (displayNum.length === 1) {
        numKeyCount = 0;
        displayNum = "0";
        calcDisplay.textContent = displayNum;
    } else {
        displayNum = displayNum.substring(0, displayNumBS);
        calcDisplay.textContent = displayNum;
    }
}

function plusMinus () {
    displayNum = parseFloat(displayNum) * (-1);
    calcDisplay.textContent = displayNum;
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
        return
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
    } else if (numKeyCount > 11) {
        return 
    } else {
        displayNum += "1";
        calcDisplay.textContent = displayNum;        
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
    } else if (numKeyCount > 11) {
        return
    } else {
        displayNum += "2";
        calcDisplay.textContent = displayNum;        
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
    } else if (numKeyCount > 11) {
        return
    } else {
        displayNum += "3";
        calcDisplay.textContent = displayNum;        
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
    } else if (numKeyCount > 11) {
        return
    } else {
        displayNum += "4";
        calcDisplay.textContent = displayNum;        
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
    } else if (numKeyCount > 11) {
        return
    } else {
        displayNum += "5";
        calcDisplay.textContent = displayNum;        
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
    } else if (numKeyCount > 11) {
        return
    } else {
        displayNum += "6";
        calcDisplay.textContent = displayNum;        
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
    } else if (numKeyCount > 11) {
        return
    } else {
        displayNum += "7";
        calcDisplay.textContent = displayNum;        
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
    } else if (numKeyCount > 11) {
        return
    } else {
        displayNum += "8";
        calcDisplay.textContent = displayNum;        
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
    } else if (numKeyCount > 11) {
        return
    } else {
        displayNum += "9";
        calcDisplay.textContent = displayNum;        
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
    keyAdd.disabled = false;
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
    keyDecimal.disabled = false;

    
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
    keyDecimal.disabled = false;

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
    keyDecimal.disabled = false;
    
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
    keyDecimal.disabled = false;
    
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
            result = division(num1, num2)
            console.log("expression: " + num1 +" / "+ num2 + " = " + result)
        }
    
        if (Number.isInteger(result) === false ) {
            var tempRoundingNum = result.toString();
            
            if (tempRoundingNum.length >= 12) {
                result = parseFloat(tempRoundingNum.substring(0,13));
                calcDisplay.textContent = result;
            } else {
                calcDisplay.textContent = result;
            }

        } else {
            calcDisplay.textContent = result;
        }
    
    displayNum = result;
    num1 = result;
    operatorKeyCount = 0;
    numKeyCount = 0;
    keyEqual.disabled = true;
}


function operateWithOperator () {
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
            result = division(num1, num2)
            console.log("expression: " + num1 +"/"+ num2 + "=" + result)
        }
    
        if (Number.isInteger(result) === false ) {
            var tempRoundingNum = result.toString();
            
            if (tempRoundingNum.length >= 12) {
                result = parseFloat(tempRoundingNum.substring(0,13));
                calcDisplay.textContent = result;
            }else {
                calcDisplay.textContent = result;
            }
            
        } else {
            calcDisplay.textContent = result;
        }

    displayNum = result;
    num1 = result;
    // operatorKeyCount = 0;
    numKeyCount = 0;
    keyEqual.disabled = true;
}

//Keyboard function
window.addEventListener('keydown', function(e) {
    // const keyBoardPress = document.querySelector(`button[data-key="${e.code}"]`);
    if (e.key === "0") {
        displayNumber0();
    } else if (e.key === "1") {
        displayNumber1();
    } else if (e.key === "2") {
        displayNumber2();
    } else if (e.key === "3") {
        displayNumber3();
    } else if (e.key === "4") {
        displayNumber4();
    } else if (e.key === "5") {
        displayNumber5();
    } else if (e.key === "6") {
        displayNumber6();
    } else if (e.key === "7") {
        displayNumber7();
    } else if (e.key === "8") {
        displayNumber8();
    } else if (e.key === "9") {
        displayNumber9();
    } else if (e.key === ".") {
        displayDecimal();
    } else if (e.key === "Backspace") {
        backSpace();
    } else if (e.key === "Escape") {
        clearDisplay();
    } else if (e.key === "=" || e.key === "Enter") {
        operate();
    } else if (e.key === "/") {
        pressDivide();
    } else if (e.key === "+") {
        pressAdd();
    } else if (e.key === "-") {
        pressSubtract();
    } else if (e.key === "*") {
        pressMultiply();
    }
    
    // console.log(e.key); 

});


  // if (numKeyCount > 11) {
    //     keyZero.disabled = true;
    //     keyOne.disabled = true;
    //     keyTwo.disabled = true;
    //     keyThree.disabled = true;
    //     keyFour.disabled = true;
    //     keyFive.disabled = true;
    //     keySix.disabled = true;
    //     keySeven.disabled = true;
    //     keyEight.disabled = true;
    //     keyNine.disabled = true;
    //     keyDecimal.disabled = true;
    // }