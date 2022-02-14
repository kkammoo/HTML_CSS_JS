'use strict';

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(i);
}

for (let i = 0; 1 <= 10; i++) {
  if (i > 8) {
    break;
  }
  console.log(i);
}

const add = (a, b) => console.log(a + b);
const subtract = (a, b) => console.log(a - b);
const multiply = (a, b) => console.log(a * b);
const divide = (a, b) => console.log(a / b);
const remainder = (a, b) => console.log(a % b);

function calculator(command, a, b) {
  console.log(command(a, b));
}

calculator(add, 10, 10);
calculator(subtract, 10, 10);
calculator(multiply, 10, 10);
calculator(divide, 10, 10);
calculator(remainder, 10, 10);
