function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function operate(a, b, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        case '%':
            result = modulus(a, b);
            break;
        default:
            break;
    }

    return result;
}

let firstNumber;
let secondNumber;
let operator;
let inputData;

const display = document.querySelector(".result-section");

function resetData() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    inputData = '';
    display.innerText = '';
}

function showInputOnDisplay(input) {
    display.textContent = input;
}

function getNumberFromDisplay() {
    return +display.textContent;
}

const buttonClickEventHandler = function (e) {

    const clickedItem = e.target.innerText;

    if (clickedItem == 'AC') {
        resetData();
    }
    else if (+clickedItem >= 0 && +clickedItem <= 9) {
        inputData += clickedItem;
        showInputOnDisplay(inputData);
    }
    else if (clickedItem == '=') {

        if(operator === null) {
            return;
        }
        
        secondNumber = getNumberFromDisplay();
        let result = operate(firstNumber, secondNumber, operator);
        operator = null;
        showInputOnDisplay(result);
    }
    else {
        if (operator !== null) {
            secondNumber = getNumberFromDisplay();
            let result = operate(firstNumber, secondNumber, operator);
            showInputOnDisplay(result);
        }
        operator = clickedItem;
        firstNumber = getNumberFromDisplay();
        inputData = '';
    }
}

resetData();

const buttons = document.querySelector(".button-section");
buttons.addEventListener('click', buttonClickEventHandler);