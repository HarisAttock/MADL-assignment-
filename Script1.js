// JavaScript source code
// Task 1
/*
var data = 2345234;
let temp = data;
let index = parseInt(prompt("Enter index."));
for (let i = 0; i < index; i++) {
    value = temp % 10;
    temp = temp / 10;
    console.log(value);
}

console.log("Last Print " + parseInt(value));

*/


//Task 2
/*
var data = "2345234";
let temp = 0;
for (let i = 0; i < data.length; i++) {
    temp += parseInt( data.charAt(i));
}
console.log(temp);
*/


//Task 3
/*
var data = "2345234";
let even = 0;
let result = 0;
for (let i = 0; i < data.length; i++) {
    even = parseInt(data.charAt(i)) % 2 == 0 ? parseInt(data.charAt(i)) : 0;
    result += even;
}
console.log(result);
*/



//Task 3 by filter method
/*
var data = "2345234";
let sum = 0;
function filteredFunc(data) {
    output = data % 2 == 0;
    return output;
}

function reducedFunc(prev, cur) {
    return prev + cur;
}

let array = data.split('');
let filteredArray = array.filter(filteredFunc).map(Number);
let numberedArray = filteredArray.map(Number);
let result = numberedArray.reduce(reducedFunc);
console.log(result);
*/

// Task 4
/*let sqrArray = [];
let cubeArray = [];
for (let i = 1; i < 11; i++) {
    sqrArray[i - 1] = i * i;
    cubeArray[i-1] = i**3;
}
console.log(sqrArray);
console.log(cubeArray);
*/


//Task 5
let input = prompt("Enter any thing");
let resultIndex = -1;
let vari = input.toLowerCase();
for (let i = 0 ; i < vari.length ; i++) {
    if (vari.charAt(i) === 'a' || vari.charAt(i) == 'e' || vari.charAt(i) == 'i' || vari.charAt(i) == 'o' || vari.charAt(i) == 'u') {
        vari.indexOf(i);
        break;
    }
}






























