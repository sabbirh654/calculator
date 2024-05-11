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
    display.innerText = '0';
}

function showInputOnDisplay(input) {

    input === Infinity ? display.textContent = 'To Big!'
        : display.textContent = input;
}

function getNumberFromDisplay() {
    return +display.textContent;
}

const buttonClickEventHandler = function (e) {

    const clickedItem = e.target.innerText;

    if (clickedItem == 'CLR') {
        resetData();
    }
    else if (clickedItem == 'C' && inputData.length != 0) {
        inputData = inputData.slice(0, inputData.length - 1);
        showInputOnDisplay(inputData);
    }
    else if (+clickedItem >= 0 && +clickedItem <= 9) {
        inputData += clickedItem;
        showInputOnDisplay(inputData);
    }
    else if (clickedItem == '.') {
        if (inputData.length != 0 && !inputData.includes('.')) {
            inputData += '.';
            showInputOnDisplay(inputData);
        }
    }
    else if (clickedItem == '=') {

        if (operator === null) {
            return;
        }
        secondNumber = getNumberFromDisplay();
        let result = parseFloat(operate(firstNumber, secondNumber, operator).toFixed(2));
        operator = null;
        inputData = '';
        showInputOnDisplay(result);
    }
    else {
        if (operator !== null) {
            secondNumber = getNumberFromDisplay();
            let result = parseFloat(operate(firstNumber, secondNumber, operator).toFixed(2));
            showInputOnDisplay(result);
        }
        operator = clickedItem;
        firstNumber = getNumberFromDisplay();
        inputData = '';
    }
}

const keyPressedEventHandler = function (e) {
    if (e.key == 'Escape') {
        resetData();
        return;
    }
    if (+e.key >= 0 && +e.key <= '9') {
        inputData += e.key;
        showInputOnDisplay(inputData);
    }
}

resetData();

const buttons = document.querySelector(".button-section");
const resultArea = document.querySelector(".result-section");
buttons.addEventListener('click', buttonClickEventHandler);
document.addEventListener('keydown', keyPressedEventHandler);