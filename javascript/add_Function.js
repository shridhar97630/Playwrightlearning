// Addition of two numbers

//  const PromptSync = require("prompt-sync");
//  let prompt = PromptSync();

// function add(x, y) {
//   return x + y;
// }

// let a = prompt("Enter your number: ");

// let b = prompt("Enter your number: ");

// let c = add(+a, +b);

// console.log('sum =', + c);

//==================================================================
// Substraction of two 

// const PromptSync = require("prompt-sync");
// let prompt = PromptSync();

// function Substraction(x, y){
//     return x - y;
// }

// let a = prompt("Enter your number : ");

// let b = prompt("Enter your number : ");

// let c = Substraction(a, b);

// console.log('SUB =' + c)

//=============================================================
// Multiplication

// const PromptSync = require("prompt-sync");
// let prompt = PromptSync();

// function Multiplication(x, y) {
//   return x * y;
// }


// let a = prompt("Enter your number: ");

// let b = prompt("Enter your number: ");

// let c = Multiplication(a, b);

// console.log('mul =', + c);

//================================================================
// Division

// const PromptSync = require("prompt-sync");
// let prompt = PromptSync();

// function Division(x, y) {
//   return x / y;
// }

// let a = prompt("Enter your number: ");

// let b = prompt("Enter your number: ");

// let c = Division(a, b);

// console.log('div =', + c);

//================================================================
// Area of circle

// const PromptSync = require("prompt-sync");
// let prompt = PromptSync();

// function areaOfCircle(r) {
//     return Math.PI * r * r;
// }

// let r = prompt("Enter Radius r: ");

// console.log('Area of Circle = ' + areaOfCircle(r));

//================================================================
// Area of Rectangle

// const PromptSync = require("prompt-sync");
// let prompt = PromptSync();

// function areaOfRectangle(length, width) {
//     return length * width;
// }

// let length = prompt("Enter Length l: ");

// let width = prompt("Enter Width w: ");

// console.log('Area of Rectangle = ' + areaOfRectangle(length, width));

//===================================================================
//Simple Interest

const PromptSync = require("prompt-sync");
let prompt = PromptSync();

function simpleInterest(P, R, Y) {
    return (P * R * Y) / 100;
}
let P = prompt("Enter Principle P: ");

let R = prompt("Enter Rate R: ");

let Y = prompt("Enter Year Y: ");

console.log('Simple Interest = ' + simpleInterest(P, R, Y));

//==================================================================

