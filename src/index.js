//External Modules
const inquirer = require('inquirer');
const writeToFile = require('./writeToFile.js');

//Local Modules
const questions = require('./questions.js');

async function init() {

    inquirer.prompt(questions)
    .then(writeToFile)
    .catch((error) => {
        console.log(error)
    });
}

init();