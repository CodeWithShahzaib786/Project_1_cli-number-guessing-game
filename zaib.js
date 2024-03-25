#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to CodeWithShahzaib - CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 4 + 1);
const answer = await inquirer.prompt([
    {
        message: "Enter your guess number( Number Limit from 1 to 10):",
        type: "number",
        name: "userGuessedNumber",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You guess a correct number");
}
else {
    console.log("Soory! You guess a wrong number");
}
