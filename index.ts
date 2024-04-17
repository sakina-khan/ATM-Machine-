#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 5000;
let myPin = 1234;

//print welcome message
console.log("Welcome to Code with Sakina - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
])
if(pinAnswer.pin === myPin){
console.log("Pin is correct, Login Successfully!");
// console.log(`Current Amount Balance is:${myBalance}`)

let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select an operation",
        choices: ["Withdraw Amount", "Check Balance"]
    }
])
if(operationAns.operation === "Withdraw Amount"){
let amountAns = await inquirer.prompt([
    {
        name: "amount",
        type: "number",
        message: "Enter the amount tp withdraw:"
    }
])
if(amountAns.amount > myBalance){
console.log("Insufficient Balance");
}
else{
    myBalance-= amountAns.amount;
    console.log(`${amountAns.amountAns} Withdraw Succussfully!`);
    console.log(`Your Balance is : ${myBalance}`)
}
}
else if (operationAns.operation === "Check Balance"){
console.log(`Your Amount Balance is: ${myBalance}`);
}
}
else{
    console.log("Pin is Incorrect, Try Again!!")
}