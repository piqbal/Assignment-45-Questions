import inquirer from 'inquirer';
export let answer = await inquirer.prompt([{
        type: "string",
        name: "UserName",
        message: "Please enter your username."
    },
    {
        type: "number",
        name: "UserAge",
        message: "Please enter your userage."
    }]);
// export default answer
let b = 10;
