//External Modules
const inquirer = require('inquirer');
const writeToFile = require('./writeToFile.js');

//Local Modules
const questions = require('./questions.js');

//Prompts the user with questions, then uses answers to write a readme.
async function init() {
    inquirer.prompt(questions)
    .then(writeToFile)
    .catch((error) => {
        console.log(error)
    });
}

init();