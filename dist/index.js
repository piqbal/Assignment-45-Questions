import inquirer from 'inquirer';
let answer = inquirer.prompt([{
        type: "string",
        name: "UserName",
        message: "Please enter your username."
    },
    {
        type: "number",
        name: "UserAge",
        message: "Please enter your userage."
    }]);
console.log(answer);
