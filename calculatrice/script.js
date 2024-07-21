let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (displayValue === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    } else if (currentOperation) {
        secondOperand = parseFloat(displayValue);
        firstOperand = calculate(firstOperand, secondOperand, currentOperation);
    }
    currentOperation = operation;
    displayValue = '';
}

function calculateResult() {
    if (currentOperation && displayValue !== '') {
        secondOperand = parseFloat(displayValue);
        displayValue = calculate(firstOperand, secondOperand, currentOperation).toString();
        firstOperand = null;
        secondOperand = null;
        currentOperation = null;
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue === '' ? '0' : displayValue;
}

function calculate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '÷':
            return a / b;
        default:
            return b;
    }
}

// Exporter la fonction calculate pour les tests
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculate };
}
