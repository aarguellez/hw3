// input the peremiters
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
    isStepNegative(step)
}

function isStepNegative(param1){
    if ((parseInt(start) > parseInt(end)) && (parseInt(param1) > 0))
    {
        alert('Step must be negative. Please re-enter. ')
        getStepInput();
    }
}

// distinguis the inputs
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



// 1st function
// "generates integers"

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

// 2nd function
// "The computes the sum."
function sumArray(myArray) {
    sum = 0

    for (var i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }

    return sum;
}


// 3rd function
// convets value and change intergers"
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


const output1 = document.getElementById('answer1')
output1.innerHTML = 'The generated array is ' + myArray(start, end, step)

const output2 = document.getElementById('answer2')
output2.innerHTML = 'The sum is ' + sumArray(myArray(start, end, step))

const output3 = document.getElementById('answer3')
output3.innerHTML = 'The binary of absolute elements is ' + binaryArray(myArray(start, end, step))