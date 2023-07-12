let outputNumberID = document.getElementById("outputNumber");
let firstOutputNumber;
let secondOutputNumber;
let result = false;
let clickedAddButton = false;
let clickedSubtractButton = false;
let clickedMultiplyButton = false;
let clickedDivideButton = false;
let clickedExponentButton = false;
let clickedLogButton = false;
let decimalClickedBool = false;
let hasResult = false;

function getCalculatorNumber(number) {
    if (outputNumberID.innerHTML == 0 || hasResult) {
        outputNumberID.textContent = number;
        hasResult = false;
    } else {
        outputNumberID.textContent += number;
    }

    if (result) {
        secondOutputNumber = Number(outputNumberID.textContent);
    }

    if (!clickedAddButton && !clickedSubtractButton && !clickedMultiplyButton && !clickedDivideButton && !clickedExponentButton && !clickedLogButton) {
        firstOutputNumber = Number(outputNumberID.textContent);
    } else {
        secondOutputNumber = Number(outputNumberID.textContent);
    }
}

function decimalClicked() {
    if (!decimalClickedBool && !outputNumberID.textContent.includes('.')) {
        outputNumberID.textContent += '.';
        decimalClickedBool = true;
    }
}

function takeTotal() {
    if (typeof firstOutputNumber != 'undefined' && typeof secondOutputNumber != 'undefined') {
        if (clickedAddButton) {
            addTotal();
        } else if (clickedSubtractButton) {
            subtractTotal();
        } else if (clickedMultiplyButton) {
            multiplyTotal();
        } else if (clickedDivideButton) {
            divideTotal();
        }else if(clickedExponentButton){
            exponentTotal();
        }
    }
}

function addTotal() {
    hasResult = true;
    clickedAddButton = false;
    result = firstOutputNumber + secondOutputNumber;
    outputNumberID.textContent = result;

    firstOutputNumber = result;
    secondOutputNumber = undefined;
}

function subtractTotal() {
    hasResult = true;
    clickedSubtractButton = false;
    result = firstOutputNumber - secondOutputNumber;
    outputNumberID.textContent = result;

    firstOutputNumber = result;
    secondOutputNumber = undefined;
}

function multiplyTotal() {
    hasResult = true;
    clickedMultiplyButton = false;
    result = firstOutputNumber * secondOutputNumber;
    outputNumberID.textContent = result;

    firstOutputNumber = result;
    secondOutputNumber = undefined;
}

function divideTotal() {
    hasResult = true;
    clickedDivideButton = false;
    result = firstOutputNumber / secondOutputNumber;
    outputNumberID.textContent = result;

    firstOutputNumber = result;
    secondOutputNumber = undefined;
}

function exponentTotal(){
    hasResult = true;
    clickedExponentButton = false;
    result = Math.pow(firstOutputNumber, secondOutputNumber);
    outputNumberID.textContent = result;

    firstOutputNumber = result;
    secondOutputNumber = undefined;
}

function addNumber() {
    clickedAddButton = true;
    clickedSubtractButton = false;
    clickedMultiplyButton = false;
    clickedDivideButton = false;
    outputNumberID.textContent = 0;
}

function subtractNumber() {
    clickedSubtractButton = true;
    clickedAddButton = false;
    clickedMultiplyButton = false;
    clickedDivideButton = false;
    outputNumberID.textContent = 0;
}

function multiplyNumber() {
    clickedMultiplyButton = true;
    clickedAddButton = false;
    clickedSubtractButton = false;
    clickedDivideButton = false;
    outputNumberID.textContent = 0;
}

function divideNumber() {
    clickedDivideButton = true;
    clickedAddButton = false;
    clickedSubtractButton = false;
    clickedMultiplyButton = false;
    outputNumberID.textContent = 0;
}

function exponentNumber(){
    clickedExponentButton = true;
    clickedDivideButton = false;
    clickedAddButton = false;
    clickedSubtractButton = false;
    clickedMultiplyButton = false;
    outputNumberID.textContent = 0;
}

function clearCalculator() {
    outputNumberID.textContent = 0;
    firstOutputNumber = undefined;
    secondOutputNumber = undefined;
    result = false;
    clickedAddButton = false;
    clickedSubtractButton = false;
    clickedMultiplyButton = false;
    clickedDivideButton = false;
    decimalClickedBool = false;
    hasResult = false;
}

document.getElementById("clearButton").addEventListener("click", clearCalculator);
document.getElementById("decimalButton").addEventListener("click", decimalClicked);
