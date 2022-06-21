// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
//  function determines if number below, at, or above boiling point.
//  paramater: determine where the 3 numbers belong in. 
//  conditional: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
 

//const temp1 = 42
//const temp2 = 350
//const temp3 = 212

// const nums = (42) => 
//   for(let i = 0; i < nums; i ++) {
//     if(nums[i] % 2 == 0)
//     console.log(`${nums[i]} below boiling point`)  } 
 
//  const nums2 = [212]
//     for(let i = 0; i < nums2;  i ++) {
//       if(nums [i] % 2 ==0)
//       console.log(`${nums2[i]} at boiling point`)}

//   const num3 = [350]
// for(let i = 0; i < num3; i ++) {
//   if (nums [i] % 2 ==0)
//   console.log(`${num3[i]} above boiling point`)
//}

//second try for this problem

// const temp = (num) =>
// if(nums > 212) {
//  return " is above boiling point"  }

// console.log(temp(350))



// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
//function; code that combines 2 arrays and gives back the length 
//paramter;the length of the array 
//conditional;gives back the correct legth 

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 42, 9, 13]


//console.log(myNumbers1.concat(myNumbers2).length) 
//output-10


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code:
//function;reverse the letter of the string 
//paramter;the reversed string

const currentCohort = "Delta 2022"
console.log(currentCohort.split('').reverse().join(""))
//Answer- 2202 altleD


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
//function;determine whether each number is odd or even 
//paramter; odd and even numbers 
//conditional; must be divisbale by 2 with no remainder to give back even, if not then odd. 

// const myArray = [13, 34, 5, 10, 27, 42]
// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] % 2) {
//     console.log("odd");
//   } else {
//     console.log("even")
//   }
// }
//output- odd, even, odd, even, odd, even

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
//function;subtract the smaller number from the bigger number
//paramter;any two numbers 
//conditional; output must be 42, 3

// Set one:
// const number1 = 58
// const number2 = 100

// // Set two:
// const number3 = 27
// const number4 = 24

// const vals = (num1, num2) => {
//   if (num2 > num1) {
//     return num2 - num1;
//   }
//   else {
// return num1 - num2;
//   }
// }
// console.log(vals(number1, number2));
// console.log(vals(number3, number4));
// output- 42, 3