const inquirer = require('inquirer');
const fs = require('fs');

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