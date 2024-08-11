import {add, subtract, multiply, divide} from './simple-math/index.js';


let a = 10;
let b = 5;

console.log(`Addition: ${a} + ${b} = ${add(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${subtract(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);
console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);

