// first - a
let add = ['cricket', 'football', 'rugby', 'baseball'];
function addValue(a, value) {
    a.push(value);
  }
addValue(add, 4);
console.log(add); 
  

// second
let remove = ['cricket', 'football', 'rugby', 'baseball'];
function removeValue(a, value) {
    a.pop(value);
}
removeValue(remove);
console.log(remove);

 
// third
let arrayOne = ['cricket','kabaddi'];
let arrayTwo = ['running','jumping'];
function combine(a, b) {
    return a.concat(b);
}
console.log(combine(arrayOne, arrayTwo));


// fourth
let index = ['cricket', 'football', 'rugby', 'baseball'];
function indexValue() {
    return index.indexOf('rugby');
}
console.log(indexValue(index));


// five
let portion = ['cricket', 'football', 'rugby', 'baseball', 'tennis', 'handball'];
function halfPortion() {
    return portion.slice(1, 4);
}
console.log(halfPortion(portion));


// six
let upper = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
function capitalLetters() {
    return upper.toUpperCase();
}
console.log(capitalLetters(upper));


// seven
let lower = 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT.';
function smallLetters() {
    return lower.toLowerCase();
}
console.log(smallLetters(lower));


// eight
const seperate = 'Lorem ipsum dolor';
function partition() {
    return seperate.split(" ");
}
console.log(partition(seperate));


// nine
const letters = 'Lorem ipsum';
function singleCharacter() {
    return letters.charAt('7');
}
console.log(singleCharacter(letters));


// tenth
const string = 'Lorem ipsum dolor';
function groupWord() {
    return string.substring(4, 10);
}
console.log(groupWord(string));


// eleven
let double = [1, 2, 3, 4];
function multipleValues(number) {
    return number.map (function(value){
        return value * 2
    })
}
console.log(multipleValues(double));


// twelve
let scatter = [1, 2, 3, 4, 5, 6];
function filterValues(number) {
    return number.filter(function(value){
        return value % 2 != 0;
    });
}
console.log(filterValues(scatter));


// thirteen
let allValues = [1, 2, 3, 4, 5, 6];
function eachValues() {
    allValues.forEach(function(value){
        console.log(value);
    })
}
eachValues(allValues);


//fourteen - a 
let value = 'angular';
let opposite = '';
function newReverse(string) {
    for (let i = string.length - 1; i >= 0; i--) {
        opposite += string[i];
    }
    return opposite;
}
console.log(newReverse(value));



//fourteen - b
let r = 'javascript';
function reverseValues() {
    return r.split("").reverse().join("");
}
console.log(reverseValues(r));


//fifteen
function palindrome(value) {
    for (i=0; i<=value.length/2;i++) {
        if (value[i] != value[value.length-1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(palindrome("kayak"));



// sixteen

let maxArray = [1,3,44,21,56,76,39];
let max = maxArray[0];
function highest() {
    for (let i = 0; i < maxArray.length; i++) {
        if (maxArray[i] > max) {
            max = maxArray[i];
        } 
    }
}
highest(maxArray);
console.log(max);


// seventeen
const input = [1, 2, 3, 4, 15,25, 6,3,25,1];

function removeDuplicate(arr) {
    const result = [];
    let idx = 0;
    const tmp = {};

    for (let i = 0; i < arr.length; i++) {
        if (!tmp[arr[i]]) {
            tmp[arr[i]] = 1;
            result[idx] = arr[i];
            idx++;
        } 
    }
    return result;
}
console.log(removeDuplicate(input));


// eighteen
function sortArray(array) {
    let length = array.length;
  
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (array[j] > array[j + 1]) {

            let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }
  
  let numbers = [5, 3, 8, 2, 1, 4];
  let sortedNumbers = sortArray(numbers);
  
  console.log(sortedNumbers); 
  


//nineteen
// Explain the concept of hoisting and provide an example?
//     DECLARING THE VARIABLE OR A FUNCTION EVEN BEFORE ASSIGNING IT IS KNOWN AS HOISTING. 
//     LET AND CONST DOESNOT HAVE HOISTING BECAUSE OF BLOCK SCOPE.
    
console.log(c);
var a = 3, b= 4;
var c = a+b;


// twenty
test();
function test (){
    console.log('terminal');
}


// twentyOne
