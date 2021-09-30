const inquirer = require('inquirer');

const questions = require('./questions.js');
const writeToFile = require('./writeToFile.js');

function init() {
    inquirer.prompt(questions)
    .then(writeToFile)
    .catch((error) => {
        console.log(error)
    });
}

init();