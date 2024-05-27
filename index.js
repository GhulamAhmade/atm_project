#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let mybalance = 10000;
let mypin = 2345;
let pinanswere = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellow("Enter your pin"),
        type: "number",
    },
]);
if (pinanswere.pin === mypin) {
    console.log(chalk.blue("Pin verified!"));
    let operationanswere = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.yellow("Please select option"),
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"],
        },
    ]);
    if (operationanswere.operation === "withdraw") {
        let amountanswere = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.yellow("Enter your amount"),
                type: "number",
            },
        ]);
        if (amountanswere.amount > mybalance) {
            console.log(chalk.red("Insufficient Balance")); //Assigment 1 done:
        }
        else if ((mybalance -= amountanswere.amount)) {
            console.log(chalk.blue(`Your remaining balance is: `) + mybalance); //Assigment 2 done:
        }
    }
    else if (operationanswere.operation === "check balance") {
        console.log(chalk.blue(`Your balance is: `) + mybalance);
    }
    else if (operationanswere.operation === "fastcash") {
        let fastcash = await inquirer.prompt([
            {
                name: "fastcash",
                message: chalk.yellow("How much amount you want in Fast Cash"),
                type: "list",
                choices: [1000, 3000, 5000, 7000, 10000],
            },
        ]);
        mybalance -= fastcash.fastcash;
        console.log(chalk.blue("Transaction successfully:"));
        console.log(chalk.blue(`Your remaining balance is: `) + mybalance); //Assigment 3 done:
    }
}
else {
    console.log(chalk.red("Incorrect pin code!!"));
}
