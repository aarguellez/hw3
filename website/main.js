// const answer = prompt(question);

const p_start = prompt('Enter the start:');
const p_step = prompt('Enter the step:');
const p_end = prompt('Enter the end:');

const start = number(p_start);
const step = number(p_step);
const end = number(p_end);

const my_array = []


// alert(`You answered ${answer}`);


// Take Input Parameters
getStartInput();
getEndInput();
getStepInput();

function getStartInput() {
    start = prompt('Enter the start: ')
    checkStart(start)
}

function getEndInput() {
    end = prompt('Enter the end: ')
    checkEnd(end)
}

function getStepInput() {
    step = prompt('Enter the step: ')
    checkStep(step)
}

// Qualify Inputs
function checkStart(param1) {
    if (isNaN(param1)) {
        alert('Invalid Input. Please enter a number.')
        getStartInput();
    }
}

function checkEnd(param1) {
    if (isNaN(param1)) {
        alert('Invalid Input. Please enter a number.')
        getEndInput();
    }
}

function checkStep(param1) {
    if (param1 == 0 || isNaN(param1)) {
        alert('Invalid Input. Please enter a number not including 0.')
        getStepInput();
    }
}



// Function 1
// "The first function generates an array of integer based on the three parameters"

function myArray(start, end, step) {
    var startCounter = parseInt(start)
    var stepCounter = parseInt(step)
    var endCounter = parseInt(end)

    var numberArray = [startCounter]

    if (startCounter < endCounter) {
        while ((startCounter + stepCounter) <= endCounter) {
            startCounter += stepCounter;
            numberArray.push(startCounter);
        }
    }
    else {
        while (endCounter <= (startCounter + stepCounter)) {
            startCounter += stepCounter;
            numberArray.push(startCounter);
        }
    }


    return numberArray;
}

// Function 2
// "The second one computes the sum of all array elements."
function sumArray(myArray) {
    sum = 0

    for (var i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }

    return sum;
}


// Function 3
// "The last one converts the value into an array of binary representation of the integers."
function binaryArray(myArray) {
    var binaryArray = []

    for (var i = 0; i < myArray.length; i++) {
        binaryArray.push(getBinary(myArray[i]));
    }

    return binaryArray;

}

function getBinary(param1) {
    var result = param1.toString(2);

    while (Math.floor(result.length % 8) != 0)
        result = "0" + result;

    return result;
}


const output1 = document.getElementById('result1')
output1.innerHTML = 'The generated array is ' + myArray(start, end, step)

const output2 = document.getElementById('result2')
output2.innerHTML = 'The sum is ' + sumArray(myArray(start, end, step))

const output3 = document.getElementById('result3')
output3.innerHTML = 'The binary of absolute elements is ' + binaryArray(myArray(start, end, step))