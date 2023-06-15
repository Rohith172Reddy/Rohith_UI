

// first
let square = (a) => {
  console.log(a * 2);
};
square(5);

// second
const countWords = (str) => {
  const words = [...str.split(" ")];

  return words.length;
};

const word = "Hi guys Ssup?";
console.log(countWords(word));

//   third
class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
const details = new Person("Don", 23, "234 avenue");
console.log(details);

// four
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function even(numbers) {
//   return numbers.filter(function (n) {
//     return n % 2 == 0;
//   });
// }

const even = (numbers) => numbers.filter((n)=>n % 2 == 0);
console.log(even(num));


//five
let destructure = {
    firstName: 'rohit',
    lastName: 'R',
}
let {firstName, lastName} = destructure;
console.log(firstName);
console.log(lastName);


//six
import capital from "./export.js";

const str = 'hello, world!';
const cap = capital(str);

console.log(cap);


// eight
const template = 'rohit';
const years = 2;
console.log(`My name is ${template}, completed Masters in ${years} years`);


//nine
function* fibonacci(l) {
    let current = 0;
    let next = 1;
  
    while (current <= l) {
      yield current;
  
      const temp = current + next;
      current = next;
      next = temp;
    }
  }
  const l = 20;

  for (const num of fibonacci(l)) {
    console.log(num);
  }


//   tenth
// If we use let keyword inside a loop, block scope concept comes into picture where the let cannot be used outside of the loop. 
// Whereas, Var acts as a global function where it can be used outside of the loop. 


//eleven
class sumValues {
    static sumOfElements(numbers) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }
  }
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const sum = sumValues.sumOfElements(numbers);
  console.log(`Sum of Values is: ${sum}`); 
  

 // twelve
 let check = [1,2,3,4,5,6,7,8];
console.log(check.includes(6));


//fourteen
import reverse from './reverse.js';

let words = 'javascript';
console.log(reverse(words));


//fifteen
let car = 'volvo';

function time (callback, delay) {
    setTimeout(callback, delay);
}

function setTime() {
    console.log(car);
}
time(setTime, 3000);