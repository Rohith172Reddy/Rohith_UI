// first

function isEven(num) {
  if (num % 2 == 0) {
    return "true";
  } else {
    return "false";
  }
}
let r = isEven(7);
console.log(r);

// second
let students = [
  {
    name: "Kohli",
    age: 28,
  },
  {
    name: "Dhoni",
    age: 39,
  },
  {
    name: "Pant",
    age: 26,
  },
];
students.forEach(function (student) {
  console.log(student.name);
});

// third
let users = [
  {
    name: "Samson",
    email: "samson@gmail.com",
  },
  {
    name: "John",
    email: "John@gmail.com",
  },
  {
    name: "Warner",
    email: "warner@gmail.com",
  },
];
let a = 0;
for (i = 0; i < users.length; i++) {
  if (users[i].name === "John") {
    a = users[i].email;
    console.log(a);
  }
}

// fourth
function isPositive(num) {
  return num >= 5 ? "true" : "false";
}
let positive = isPositive(-2);
console.log(positive);

// fifth
let grade = 85;
let score = grade >= 60 ? "Pass" : "Fail";
console.log(score);

// sixth
function isPalindrome(palindrome) {
  for (let i = 0; i < palindrome.length / 2; i++) {
    if (palindrome[i] != palindrome[palindrome.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("racecar"));

// seventh
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// eighth
let name = "Alice";
let d = name === "Alice" ? "Hello Alice" : "Hello, Stranger";
console.log(d);

// nineth
let books = [
  {
    title: "AntMan",
    author: "Modi",
  },
  {
    title: "Transformers",
    author: "Rahul",
  },
  {
    title: "The Great Gatsby",
    author: "Arvind",
  },
];

for (let i = 0; i < books.length; i++) {
  if (books[i].title === "The Great Gatsby") {
    c = books[i].author;
    console.log(c);
  }
}

// tenth
function calculateArea(length, width) {
  return (area = length * width);
}
console.log(calculateArea(4, 5));


// eleventh
function prime(n) {
  for (let i = 2; i <= n; i++) {
    let s = true;
    for (let j = 2; j <= Math.sqrt(i) ; j++){
        if (i % j === 0) {
            s = false;
            break;
        }
    }
    if(s) {
        console.log(i);
  }
  }
}
prime(50);

