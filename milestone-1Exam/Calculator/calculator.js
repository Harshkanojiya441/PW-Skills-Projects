
//take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

//take the operatot input
const num1 = parseFloat(prompt("Enter first number: "))
const num2 = parseFloat(prompt("Enter second number: "))

let result;

//using if ...else if...else
if (operator == "+") {
    result = num1 + num2;
} else if (operator == "-") {
    result = num1 - num2;
} else if (operator == "*") {
    result = num1 * num2;
} else if (operator == "/") {
    result = num1 / num2;
} else {
    console.log("Enter Valid Operator");
}

//display the result
console.log(`${num1} ${operator} ${num2} = ${result} `);