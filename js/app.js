

console.log("Javascript file is loaded!")

// fnDeclaration()  // calling the function!
// fnExpression() // calling the function, executing a block of code!

// function fnDeclaration() {
//     console.log("I'm coming from a function declartion")
// }

// const fnExpression = function () {
//     console.log("I'm coming from a function expression")
// }

// Define multiple, divide, and subtract arrow fuctions

// const mult = (a, b) => a*b;
// const div = (a, b) => a/b;
// const sub = (a, b) => a-b;

// console.log(mult(2, 5));
// console.log(div(4,2));
// console.log(sub(5,3));

// function computeArea(w, h) {
//     let area = w*h;
//     return `The area of a rectange with a width of ${w} and a height of ${h} is ${area} square units`

// }

// console.log(computeArea(5, 25))

const computeArea = (w,h) => `The area of a rectange with a width of ${w} and a height of ${h} is ${w*h} square units`

console.log(computeArea(5, 25))