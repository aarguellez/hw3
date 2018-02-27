const startStr = prompt('Enter the start')
const start= parseInt(startStr,10)

alert(start)

const endStr = prompt('Enter the end')
const end= parseInt(endStr,10)

const stepStr = prompt('Enter the step')
const step = parseInt(stepStr,10)

var min = start;
var max = end;
var increments = step;
var arr = [];
for (var i = 0; i <= step; ++i)
    arr.push(min + increments * i);


// function createNumArray(start, end):[step];
// alert(arr)
// {
//     var arr = [], 
//         i = step;
 
//      while((arr[arr.length] = i) < end) {i++}
//      return arr;
//  }
// alert(arr)
// var myNumbers = [start,end];

// Array.prototype.range = function(start, end) {
//     if (!this.length) {
//         while (end >= start) {
//             this.push(start++);
//         }
//     } else {
//         throw "You can only call 'range' on an empty array";
//     }
//     return this;
// };

// var array = [].range(1, 20);
const output = document.getElementById("output")
output.innerHTML = 'The generated array is ' + arr 