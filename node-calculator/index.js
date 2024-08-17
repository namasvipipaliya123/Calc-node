const { sum, subtract, multiplication, divide, modules, squreroot } = require('./math');
const prompt = require('prompt-sync')();

console.log("1 for sum ");
console.log("2 for subtract ");
console.log("3 for multiplication");
console.log("4 for divide");
console.log("5 for modules");
console.log("6 for square root");

let opr = prompt('Select an operation (1-6): ');

if (opr == 1) {
    console.log("Enter a:");
    let a = prompt();
    console.log("Enter b:");
    let b = prompt();
    console.log('Result:', sum(a, b));

} else if (opr == 2) {
    console.log("Enter a:");
    let a = prompt();
    console.log("Enter b:");
    let b = prompt();
    console.log('Result:', subtract(a, b));

} else if (opr == 3) {
    console.log("Enter a:");
    let a = prompt();
    console.log("Enter b:");
    let b = prompt();
    console.log('Result:', multiplication(a, b));

} else if (opr == 4) {
    console.log("Enter a:");
    let a = prompt();
    console.log("Enter b:");
    let b = prompt();
    console.log('Result:', divide(a, b));

} else if (opr == 5) {
    console.log("Enter a:");
    let a = prompt();
    console.log("Enter b:");
    let b = prompt();
    console.log('Result:', modules(a, b));

} else if (opr == 6) {
    console.log("Enter a:");
    let a = prompt();
    console.log('Result:', squreroot(a));

} else {
    console.log('Invalid operation');
}
