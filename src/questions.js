const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'Please enter the title of your project: \n',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project: \n',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step \ndescription of how to get the development environment running: \n',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots with the md format ![alt text](img/screenshot.png): \n',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Would you like to include contribution guidelines?',
        name: 'contribute_choice',
        choices: ['Yes', 'No']
    },
    {
        type: 'list',
        message: "Would you like to use the Contributor Covenant Code of Conduct or write your own contribution guidelines?",
        name: 'covenant_or_custom',
        choices: ['Covenant Code V2.1', 'Custom'],
        when(answers) {
            return answers.contribute_choice !== "No"
        }
    },
    {
        type: 'input',
        message: 'Outline your contribution guidelines.',
        name: 'contribute',
        when(answers) {
            return answers.covenant_or_custom === 'Custom';
        }
    },
    {
        type: 'input',
        message: 'Provide a few test examples for your application and describe how to run them: \n',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Select a license:',
        name: 'license',
        choices: ['Apache License 2.0','GNU GPLv3','ISC','MIT','The Unlicense']
    },
    {
        type: 'input',
        message: "Provide your Github username for the questions section: \n",
        name: 'username'
    },
    {
        type: 'input',
        message: 'Provide your email for the questions section: \n',
        name: 'email'
    }
];

function init() {
    inquirer.prompt(questions)
    .then(writeToFile)
    .catch((error) => {
        console.log(error)
    });
}

let writeToFile = function (answers){
    console.log('hello there');
}

init();

